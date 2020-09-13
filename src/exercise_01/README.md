# Java10 以降のバージョニング規約

Javaのバージョンをパースし、比較することができる「Version」クラス

引用: https://qiita.com/YujiSoftware/items/2c5a9117a577700ea540#fnref3

## バージョン表示形式

- feature.interim.update.patch

  例: 10.0.1.2

## バージョン構成要素

- feature: 機能リリース・バージョン
- interim: 中間リリース・バージョン
- update: アップデートリリース・バージョン
- patch: パッチリリース・バージョン

## ルール

- バージョン構成要素は上述のとおり 4 個であること
- 機能リリース・バージョン（feature）以外は省略可能であること
- すべての要素は整数であること
- 機能リリース・バージョン(feature)は 10 以上の整数であること
- ある桁以降がすべて 0 なら、必ず省略して表記すること
  - 例: 11.0.0.0 → 11
  - 例: 11.0.2.0 → 11.0.2

※ これらを満たさない場合は Error を吐く

## コンストラクタ

```javascript
version = new Version("10.1.2.3");
```

## メンバ

### 要素

```javascript
version = new Version("10.1.2.3");
version.feature #> 10;
version.interim #> 1;
version.update  #> 2;
version.patch   #> 3;
```

### バージョン比較

```javascript
v1 = (new Version("10.3"));
v2 = new Version("10.2.1.3");
v1.value > v2.value #> true
```
