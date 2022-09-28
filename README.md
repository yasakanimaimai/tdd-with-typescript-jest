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

## 参考記事
> [副作用ってなんだ？　〜楽に小さく単体テストをしよう〜 - Qiita](https://qiita.com/suzuki-hoge/items/bad43630ad1ad723ca4a)
> (副作用とは)同じ様に呼び出しても同じ結果が返ってくるとは限らない処理のことです

> [Github ローカルリポジトリをリモートリポジトリと紐づける - Qiita](https://qiita.com/miriwo/items/a7be71f6a238b09eda10)
> `git remote add origin コピーしたリポジトリアドレス`

> [FN1609004 | TypeScript入門 03: クラスを継承して使う | HTML5 : テクニカルノート](http://www.fumiononaka.com/Business/html5/FN1609004.html)
> - サブクラスのコンストラクタ(constructor())は、関数super()でスーパークラスのコンストラクタを呼びださなければなりません。