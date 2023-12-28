// Create Web Server 

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = [{ name: 'zhangsan', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'lisi', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'wangwu', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'zhaoliu', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'tianqi', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'sunba', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'zhangsan', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'zhangsan', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'zhangsan', message: 'helloworld', dateTime: '2019-5-10' },
{ name: 'zhangsan', message: 'helloworld', dateTime: '2019-5-10' }];