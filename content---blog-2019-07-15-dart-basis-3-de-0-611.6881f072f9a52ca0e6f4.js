(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{45:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return c}),n.d(t,"rightToc",function(){return b}),n.d(t,"default",function(){return o});n(0);var a=n(80);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={id:3,title:"Dart 基础三",author:"wangyongwang",authorURL:"https://juejin.im/user/59151f3a8d6d8100585b68ce",authorTitle:"A flutter fans",authorImageURL:"https://p5.ssl.qhimg.com/t01b6580ec3d65d7b7f.png",tags:["dart","basic"]},b=[],i={rightToc:b},p="wrapper";function o(e){var t=e.components,n=l(e,["components"]);return Object(a.b)(p,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"前言：",Object(a.b)("br",{parentName:"p"}),"\n","笔者在之前已经写了2篇Dart的基础文章了。  "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",r({parentName:"p"},{href:"/blog/2019/07/13/dart-basis-1"}),"Dart 基础 （一）"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",r({parentName:"p"},{href:"/blog/2019/07/14/dart-basis-2"}),"Dart 基础 （二）"))),Object(a.b)("p",null,"本文是Dart基础的第3篇，在本文中，笔者会主要介绍2部分内容，运算符和异常。"),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"1-operator（运算符）主要分如下4部分"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#1-operator（运算符）主要分如下4部分"}),"#"),"1 Operator（运算符）主要分如下4部分"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"1.1 算数运算符")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"1.2 级联运算符")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"1.3 类型判定运算符")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"1.4 其他运算符"))),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"2-异常主要分如下4部分"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#2-异常主要分如下4部分"}),"#"),"2 异常主要分如下4部分"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"2.0 Try")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"2.1 Throw")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"2.2 Catch")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"2.3 Finally"))),Object(a.b)("p",null,"详情如下："),Object(a.b)("p",null,"Dart中可能遇到的运算符如下图所示："),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"https://p5.ssl.qhimg.com/t01e7d27b01364cd7d3.png",alt:"运算符.png"}))),Object(a.b)("p",null,"上述运算符中，笔者不大熟悉的运算符有："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"算数运算符：",Object(a.b)("inlineCode",{parentName:"li"},"~/")),Object(a.b)("li",{parentName:"ul"},"赋值运算符：",Object(a.b)("inlineCode",{parentName:"li"},"??")),Object(a.b)("li",{parentName:"ul"},"级联运算符：",Object(a.b)("inlineCode",{parentName:"li"},"..")),Object(a.b)("li",{parentName:"ul"},"类型判定运算符：",Object(a.b)("inlineCode",{parentName:"li"},"as"),"、",Object(a.b)("inlineCode",{parentName:"li"},"is"),"、",Object(a.b)("inlineCode",{parentName:"li"},"is!")),Object(a.b)("li",{parentName:"ul"},"其他运算符：",Object(a.b)("inlineCode",{parentName:"li"},"?."))),Object(a.b)("p",null,"如果你对其他运算符不大熟悉，可以查看",Object(a.b)("a",r({parentName:"p"},{href:"http://dart.goodev.org/guides/language/language-tour#operators%E6%93%8D%E4%BD%9C%E7%AC%A6"}),"Dart文档"),"。"),Object(a.b)("h5",null,Object(a.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"anchor",id:"11-算数运算符"})),Object(a.b)("a",r({parentName:"h5"},{"aria-hidden":!0,className:"hash-link",href:"#11-算数运算符"}),"#"),"1.1 算数运算符"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"~/"),": 整除;")),Object(a.b)("p",null,"整除的结果是 运算符左侧的数 除以 运算符右侧的数 可以商几。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"5 ~/ 2 = 2;\n7 ~/ 3 = 2;\n9 ~/ 3 = 0;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"赋值运算符：",Object(a.b)("inlineCode",{parentName:"li"},"??"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"String qiShare1 = 'qiShare1';\nString qiShare2;\nqiShare2 ??= qiShare1;\nprint(qiShare2);\n\n// 输出结果\nqiShare1\n")),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"12-级联运算符"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#12-级联运算符"}),"#"),"1.2 级联运算符"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"级联运算符：",Object(a.b)("inlineCode",{parentName:"li"},".."))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"..")," 级联运算符"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"class QiCascade {\n  String firstProperty;\n  String secondProperty;\n  String thirdProperty;\n  String fourthProperty;\n}\n\nclass QiSubCascade extends QiCascade{\n  \n}\n\nvoid main() {\n  \n  QiCascade cascade = QiCascade();\n  cascade.firstProperty = 'firstPropertyValue';\n  cascade.secondProperty = 'secondPropertyValue';\n  cascade.thirdProperty = 'thirdPropertyValue';\n  cascade.fourthProperty = 'fourthPropertyValue';\n\n  print('输出属性：${cascade..firstProperty\n  ..secondProperty\n  ..thirdProperty\n  ..fourthProperty}');\n  print('级联输出：');\n  print(cascade..firstProperty..secondProperty..thirdProperty..fourthProperty);\n  print('属性：${cascade.firstProperty}');\n  \n  print(cascade.firstProperty);\n  print(cascade.secondProperty);\n  print(cascade.thirdProperty);\n  print(cascade.fourthProperty);\n\n  cascade..firstProperty = 'changedFirstPropertyValue'\n  ..secondProperty = 'changedSecondPropertyValue'\n  ..thirdProperty = 'changedThirdPropertyValue'\n  ..fourthProperty = 'changedFourthPropertyValue';\n\n  print('级联输出：${cascade..firstProperty\n  ..secondProperty\n  ..thirdProperty\n  ..fourthProperty}');\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"输出结果")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"flutter: 输出属性：Instance of 'QiCascade'\nflutter: 级联输出：\nflutter: Instance of 'QiCascade'\nflutter: 属性：firstPropertyValue\nflutter: firstPropertyValue\nflutter: secondPropertyValue\nflutter: thirdPropertyValue\nflutter: fourthPropertyValue\nflutter: 级联输出：Instance of 'QiCascade'\n")),Object(a.b)("p",null,"看起来级联运算符可以用于同时操作并列的实例变量。"),Object(a.b)("p",null,"####1.3 类型判定运算符"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"类型判定运算符：",Object(a.b)("inlineCode",{parentName:"li"},"as"),"、",Object(a.b)("inlineCode",{parentName:"li"},"is"),"、",Object(a.b)("inlineCode",{parentName:"li"},"is!"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"操作符"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"解释"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"as"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"类型转换")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"is"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"如果对象是指定的类型返回true")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"is!"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"如果对象是指定的类型返回false")))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"  dynamic subCascade = QiSubCascade();\n  \n  if (subCascade is QiCascade) {\n    subCascade.firstProperty = 'isQiCascadeFirstPropertyValue';\n  }\n  print('subCascade属性：${subCascade.firstProperty}');\n  print('subCascade runtimeType：${subCascade.runtimeType}');\n\n  if(subCascade.runtimeType == QiSubCascade) {\n    print('subCascade的runtimeType为 ${subCascade.runtimeType}');\n  }\n  \n  (subCascade as QiCascade).firstProperty = 'asQiCascadeFirstPropertyValue';\n  print('subCascade属性：${subCascade.firstProperty}');\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"使用 is 和 as 的区别在于："),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"使用is：如果上述subCascade不是QiCascade，则条件中的赋值代码不会执行"),Object(a.b)("li",{parentName:"ul"},"使用as：如果上述subCascade为null 或者不是QiCascade类型，则运行过程中会抛出异常。")),Object(a.b)("p",{parentName:"blockquote"},"输出结果")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"flutter: subCascade属性：isQiCascadeFirstPropertyValue\nflutter: subCascade runtimeType：QiSubCascade\nflutter: subCascade的runtimeType为 QiSubCascade\nflutter: subCascade属性：asQiCascadeFirstPropertyValue\n")),Object(a.b)("p",null,"####1.4 其他运算符"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"运算符"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"名字"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"解释"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"()"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"使用方法"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"代表调用一个方法。")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"[]"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"访问List"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"访问list 中特定位置的元素。")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"."),Object(a.b)("td",r({parentName:"tr"},{align:null}),"访问Member"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"访问元素，如上边我们访问cascade.firstProperty。")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"?."),Object(a.b)("td",r({parentName:"tr"},{align:null}),"条件成员访问"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"和 . 类型, 但是.左边操作对象不能为null，否则抛出异常，?.左边的操作对象可以为null，返回null。")))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"subCascade = null;\n  \n  try {\n    print('赋值null 后访问成员 ${subCascade.firstProperty}');\n  } catch (e) {\n    print('异常信息 $e');\n  }\n  \n  print('赋值null 后访问成员 ${subCascade?.firstProperty}');\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"输出结果")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"flutter: 异常信息 NoSuchMethodError: The getter 'firstProperty' was called on null.\nReceiver: null\nTried calling: firstProperty\nflutter: 赋值null 后访问成员 null\n")),Object(a.b)("p",null,"如果我们使用条件成员访问运算符",Object(a.b)("inlineCode",{parentName:"p"},"?."),"，就不会有上述异常。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"其他运算符：",Object(a.b)("inlineCode",{parentName:"li"},"?."),": 条件成员访问，如果操作符左侧的实例存在，则会取值 ;")),Object(a.b)("p",null,"如 qiShare?.name，如果 qiShare 不为 null，则返回结果为 qiShare.name。否则返回结果为null。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"subCascade = null;\nsubCascade ?. firstProperty;\n")),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"异常"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#异常"}),"#"),"异常"),Object(a.b)("p",null,"常见的异常有 FormatException格式异常、HttpException网络异常、FileSystemException操作文件的异常、越界的异常，操作的实例调用了没有实现的方法 的异常。"),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"21-try"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#21-try"}),"#"),"2.1 Try"),Object(a.b)("p",null,"try 用于包含可能出现异常的代码"),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"22-throw"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#22-throw"}),"#"),"2.2 Throw"),Object(a.b)("p",null,"throw 用于抛出异常。"),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"23-catch"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#23-catch"}),"#"),"2.3 Catch"),Object(a.b)("p",null,"Catch 用于捕获异常，可以防止异常继续传递。除非使用了",Object(a.b)("inlineCode",{parentName:"p"},"rethrow")," 会将捕获的异常再次抛出。"),Object(a.b)("p",null,"笔者先举了2个特定的异常例子FormatException 、IntegerDivisionByZeroException"),Object(a.b)("p",null,"1.FormatException，在把字符串'1234B'转为数字的时候出现的类型转换异常。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"var numValue = '1234B';\n    try {\n      int numValueInt = int.parse(numValue);\n      print(numValueInt);\n    } on FormatException catch (e){\n      print('出现FormatException: $e');\n        // rethrow; 使用rethrow 会将catch 住的异常再次抛出 \n    } on Exception catch(e) {\n      print('Exception: $e');\n      // rethrow; 使用rethrow 会将catch 住的异常再次抛出 \n    } \n\n    // 输出结果：\n    /*\n    flutter: 出现FormatException: FormatException: Invalid radix-10 number (at character 1)\n123\\^]4B\n     */\n")),Object(a.b)("p",null,"2.IntegerDivisionByZeroException 在0作除数的时候出现的异常。整除出现。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"     // double zeroValue = 0.0; // 如果使用0.0 则IntegerDivisionByZeroException 不会捕获\n     int zeroValue = 0;\n    int num1 = 1;\n    try {\n      print(num1 ~/ zeroValue); // 会触发异常 但是也不是除0异常\n      // print(num1 / zeroValue); // 不会触发异常\n    } on IntegerDivisionByZeroException catch(e) {\n      print('除以0异常：$e');\n    } catch (e) {\n      print('异常信息：$e');\n    }\n    // 输出结果\n     flutter: 除以0异常：IntegerDivisionByZeroException\n")),Object(a.b)("p",null,"下边笔者又列举了其他的几个异常的例子。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// 抛出异常示例\n  try {\n    throw Exception(\n    'Custom Exception'\n    );\n  } catch (e) {\n    print(e);\n  }\n\n  try {\n    throw '自定义字符串Exception';\n  } catch (e) {\n    print(e);\n  }\n  \n  List list1 = ['QiShare'];\n  try {\n    print(list1[1]);  \n  } catch (e) {\n    print(e);\n  }\n\n  try {\n    (list1 as QiCascade).firstProperty;\n  } catch (e) {\n    print(e);\n  }\n\n  list1 = null;\n  try {\n    print(list1[1]);  \n  } catch (e) {\n    print(e);\n  }\n\n  try {\n    (list1 as QiCascade).firstProperty;\n  } catch (e) {\n    print(e);\n  }\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"输出结果")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"flutter: Exception: Custom Exception\nflutter: 自定义字符串Exception\nflutter: RangeError (index): Invalid value: Only valid value is 0: 1\nflutter: type 'List<dynamic>' is not a subtype of type 'QiCascade' in type cast\nflutter: NoSuchMethodError: The method '[]' was called on null.\nReceiver: null\nTried calling: [](1)\nflutter: NoSuchMethodError: The getter 'firstProperty' was called on null.\nReceiver: null\nTried calling: firstProperty\n")),Object(a.b)("p",null,"针对上述代码的异常捕获，笔者发现，catch不仅可以捕获异常也可以捕获Error，笔者Dart 的Exceptions 包括Exception 和 Error。并且对如上代码中RangeError、NoSuchMethodError的代码做了如下处理："),Object(a.b)("p",null,"捕获RangeError"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"List list1 = ['QiShare'];\n    try {\n      print(list1[1]);  \n    } on RangeError catch(error) {\n      print('RangeError错误：$error');\n    } catch (e) {\n      print(e.runtimeType);\n      print(e);\n    }\n    // 输出结果：\n    /*\n    flutter: RangeError错误：RangeError (index): Invalid value: Only valid value is 0: 1\n    */\n    \n")),Object(a.b)("p",null,"捕获NoSuchMethodError"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"List list1;\n    try {\n      print(list1[1]);  \n    } on NoSuchMethodError catch(noSuchMethodError){\n      print('NoSuchMethodError错误：$noSuchMethodError');\n    } catch (e) {\n      print('异常信息：$e');\n    }\n\n    // 输出结果：\n    /**\n     * flutter: NoSuchMethodError错误：NoSuchMethodError: The method '[]' was called on null.\nReceiver: null\nTried calling: [](1)\n     */\n")),Object(a.b)("p",null,"####2.4 Finally "),Object(a.b)("p",null,"Finally 部分的代码，不管是否有出现异常，都会执行，如果出现了异常，则执行完catch中的代码后，会执行Finally 中的代码，如果没有出现异常，则执行完了try中的代码后，会执行Finally 中的代码。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"    List list1;\n    try {\n      print(list1[1]);  \n    } on NoSuchMethodError catch(noSuchMethodError){\n      print('NoSuchMethodError错误：$noSuchMethodError');\n    } catch (e) {\n      print('异常信息：$e');\n    } finally {\n      print('执行Finally 中的代码');\n    }\n    \n    \n /**\n     * flutter: NoSuchMethodError错误：NoSuchMethodError: The method '[]' was called on null.\nReceiver: null\nTried calling: [](1)\nflutter: 执行Finally 中的代码\n     */\n")),Object(a.b)("p",null,"还有一种情况是try 中的代码出现了异常，但是没有使用catch 进行异常捕获。但使用了finally 语句。像这种情况，出现异常的情况下，会先执行finally 中的代码，然后抛出异常。\n代码如下："),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"    List list3;\n    try {\n      print(list3[1]);  \n    } finally {\n      print('执行Finally 中的代码');\n    }\n    \n    // 输出结果：\n    \n    /**\n    flutter: 执行Finally 中的代码\nflutter: ══╡ EXCEPTION CAUGHT BY GESTURE ╞═══════════════════════════════════════════════════════════════════\nflutter: The following NoSuchMethodError was thrown while handling a gesture:\nflutter: The method '[]' was called on null.\nflutter: Receiver: null\nflutter: Tried calling: [](1)\nflutter:\nflutter: When the exception was thrown, this was the stack:\nflutter: #0      Object.noSuchMethod (dart:core-patch/object_patch.dart:50:5)\n省略............\n    */\n")),Object(a.b)("h4",null,Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"参考学习网址"})),Object(a.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#参考学习网址"}),"#"),"参考学习网址"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://dart.goodev.org/guides/language/language-tour#operators%E6%93%8D%E4%BD%9C%E7%AC%A6"}),"Dart语法概览")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://dart.dev/guides/language/language-tour#throw"}),"Exceptions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://baike.so.com/doc/5687643-5900335.html"}),"运算符 "))))}o.isMDXComponent=!0}}]);