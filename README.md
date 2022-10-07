# テスト駆動開発(TDD)のサンプルコードをTypeScriptで書いてみる

<br>

## 環境構築
以下の記事を参考にした
[TypeScript: JestでES Modulesは問題なくテストできるのか？](https://zenn.dev/suin/scraps/126d311493a9a1)

1. `pnpm init`でpackage.jsonを作成
2. package.jsonに`"type": "module",`を追加
3. `pnpm add -D typescript jest @types/jest ts-jest`でts-jestの環境構築
4. package.jsonに以下を追加
```json
  "jest": {
    "globals": {
      "ts-jest": {
        "useESM": true
      }
    },
    "preset": "ts-jest/presets/default-esm"
  }
  ```
5. `tsc -init`でtsconfig.jsonを作成。`"module": "es2020",`に変更(ここまででTSは実行可能)
6. tsconfig.jsonに`"allowJs": true`を追加
7. package.jsonを`"preset": "ts-jest/presets/js-with-ts-esm"`で上書き

<br>

## chapter4 (意図を語るテスト)
- chapter3のequals()メソッドでは、型とamountが一致していることを等価とみなしたことを受けて
Multiplicationで行う比較検査も同様にした。
- 値の比較からオブジェクトの比較になったのでtoStrictEqualを使った。
- amountがDollarクラス外で使用されなくなったので、privateにした。

<br>

## chapter5 (原則をあえて破るとき)
- 早く多国籍通貨の計算のコードを書きたいが、まだドルしか出てきていないのでフランを追加した。
フランを追加することをまず目標とし、ドルのコードをコピペして一旦テストまで通るようにした。
基本的にコピペはNG。すぐに重複を削除したい。

<br>

## chapter6 (テスト不足に気付いたら)
- DollarとそれをコピペしたFrancの重複を無くしたいため、Moneyクラスを作り、両クラスに継承させた。
- まずは手軽そうなamountとequalsメソッドをMoneyクラスに移動した。
- DollarとFrancを比較したら。。という疑問は一旦保留してリストに追加した。

<br>

## chapter7 (疑念をテストに翻訳する)
- Dollar(5) == Franc(5)を比較したらtrueになってしまったので、
amountだけでなくクラス名も比較対象に加えて通貨の比較も検証するようにした。
- しかし、通貨の比較をするためにクラス名を取得するのは、モデル内で言語的な処理をしているので、
次元がずれている。できれば財務の世界の言葉で比較を行いたい。
- ちなみに`toBeTruthy`はオブジェクトが定義されていればtrueになってしまうので`toBe(true)`を使うこと

<br>

## chapter8 (実装を隠す)
- サブクラスのDollarとFrancを削除したいため、timesメソッドをMoneyクラスに移した
  - サブクラスを参照しているテスト箇所をMoney型に変更するところから始めた
  - Moneyクラスでサブクラスのインスタンス化に対応するため、Factoryメソッドをstaticで実装した
- Money, Dollar, Francファイルで循環参照になっていたので、Moneyファイルにサブクラスを同居させた


<br>

## chapter9 (歩幅の調整)
- 通貨の概念を取り入れて二つのサブクラスを削除する準備を進めた
  - まずベタ書きで通過を返すメソッドを作った
  - 次にベタ書きの通貨を変数にした
  - するとサブクラス間でcurrencyメソッドが同じ実装になったのでMoneyクラスに移動した。
  同時にcurrencyNameプロパティも追加した。
  - 次にサブクラスのコンストラクタで通貨をベタ書きでセットした
  - サブクラスのコンストラクタが一致したのでsuperで統一した


<br>

## chapter10 (テストに聞いてみる)
- サブクラスのtimesメソッドの実装を一致させるために、ベタ書きの通貨を変数にしたり
抽象化したMoneyクラスを具象化した。
- Javaとは違って、親クラスが抽象クラスでなければ、
継承してもそのインスタンスは親クラスの型として扱われない。
しかし、そもそも抽象化の途中の不完全なコードに対して警告が出ていたので
TSは抽象化を促していると考えられる。

<br>

## chapter11 (不要になったら消す)
- サブクラスを削除した
- それに伴って、前回までは必要だったテストが冗長になったので一緒に削除した

<br>

## chapter12 (設計とメタファー)
- いよいよ通貨の計算を書き始めた。まずは同じ通貨の足し算から。
- 計算結果は将来複雑な実装になりそうなので、Expressionに任せた。一旦空のインターフェイスを作った。
- 計算結果の換算をBankオブジェクトに任せた。

<br>

## chapter13 (実装を導くテスト)
- todoを進めるためにまずテストを書き、テスト上必要なオブジェクトの実装を進めた
- 一旦強引に実装を進めつつ、重複を削除したり、ポリモーフィズムにしたり。
- JavaとTypeScriptのprotected修飾子の強さ違う？
SumクラスでMoney.amountにアクセスできないんだが。。
=> Javaは同じパッケージ内であればアクセスできるのがTSではできない。
- Bankオブジェクトにreduceメソッドを実装したはいいが、結局キャストしてしまうということは
Sum以外のオブジェクト(Moneyなど)が入る


## 参考記事
> [副作用ってなんだ？　〜楽に小さく単体テストをしよう〜 - Qiita](https://qiita.com/suzuki-hoge/items/bad43630ad1ad723ca4a)
> (副作用とは)同じ様に呼び出しても同じ結果が返ってくるとは限らない処理のことです

> [Github ローカルリポジトリをリモートリポジトリと紐づける - Qiita](https://qiita.com/miriwo/items/a7be71f6a238b09eda10)
> `git remote add origin コピーしたリポジトリアドレス`

> [FN1609004 | TypeScript入門 03: クラスを継承して使う | HTML5 : テクニカルノート](http://www.fumiononaka.com/Business/html5/FN1609004.html)
> - サブクラスのコンストラクタ(constructor())は、関数super()でスーパークラスのコンストラクタを呼びださなければなりません。

> [TypeScriptとJavaとの違いによるつまずきと「循環参照」 - こまぶろ](https://ky-yk-d.hatenablog.com/entry/2018/11/11/071020)
> - ここまできて、自分の最初の推測「クラスの循環参照が原因だ」が誤りだったということがわかった。問題なのは、クラスの循環参照ではなく、モジュール同士の循環参照だ。では、モジュールの循環参照を無くせば正常に動作するのだろうか。

> [JSの二重否定 | すな.dev](https://www.sunapro.com/js%E3%81%AE%E4%BA%8C%E9%87%8D%E5%90%A6%E5%AE%9A/)
> ```ts
> //objは定義されてない
> console.log(obj) //undefined
> console.log(!obj) //true
> console.log(!!obj) //false
> ```

> [【TS】クラスのメソッドとプロパティは違うよって話](https://zenn.dev/nekoniki/articles/6a4f2ce39a4bc6)
> superで扱うことができるのは 「クラスメソッド」 なので、
メソッドでないプロパティに対してsuperを指定しても当該のエラーが発生するという仕組みです。

> [【Jest・エラー】serializes to the same string | milestones](https://de-milestones.com/%E3%80%90jest%E3%83%BB%E3%82%A8%E3%83%A9%E3%83%BC%E3%80%91serializes-to-the-same-string/)
> toBeではなくtoEqualを使用すればOKです。
