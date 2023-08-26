// import a from './a';
// import b from './b';
// import './index.less';
// import url from './1.png';
// import "./a.less";
import $ from 'jquery';
// import home from './home';
// import imgUrl from './movie/a/b';

// console.log(a,b);
// console.log(home);


// $('<h1>').text("Hello webpack").appendTo(document.body);
// $('<h1>').text("我是一个大帅b").appendTo(document.body);
// $('<img>').prop('src', url).appendTo(document.body);
// imgUrl()

import styles1 from './b.module.less';
import styles2 from './c.module.less';

$("<h1>").text("Hello webpack").addClass(styles1.a).appendTo(document.body);
$("<h1>").text("Hello webpack").addClass(styles2.a).appendTo(document.body);