// JavaScript Document
//打开数据库
var db = openDatabase('myData','1.0','test database',1024*1024);
//创建数据表
db.transaction(function(tx){
		tx.executeSql('create table if not exist MsgData(name text,msg text,time integer)',[]);
	});

function getE(x){
		return document.getElementById(x);
	}

getE('clear').onclick = function(){
		db.transaction(function(tx){
				tx.executeSql('drop table MsgData',[]);
			});
		showAllData();
	}
getE('save').onclick = function(){
		saveData();
		return false;
	}

//调用removeAll函数清除当前显示的数据
function removeAllData(){
		for(var i = datalist.children.length-1; i >= 0; i--){
				datalist.removeChild(datalist.children[i]);
			}
	}

//调用showdata函数，使用row参数，该参数表示从数据库中读取到的一行数据，读取后，输出到页面中
function showData(row){
		var dt = document.createElement('dt');
		dt.innerHTML = row.name;
		var dd = document.createElement('dd');
		dd.innerHTML = row.msg;
		var tt = document.createElement('tt');
		var t = new Date();
		t.setTime(row.time);
		tt.innerHTML = t.toLocaleDateString()+" "+t.toLocaleTimeString();
		datalist.appendChild(dt);
		datalist.appendChild(dd);
		datalist.appendChild(tt);
	}
	
function showAllData(){
		db.transaction(function(tx){
				tx.executeSql('create table if not exist MsgData(name text,msg text,time integer)',[]);
				tx.exectueSql('select * from MsgData',[],function(tx,result){
						removeAllData();
						for(var i=0; i<result.rows.length;i++){
								showData(result.rows.item(i));
							}
					});
			});
	}

function addData(name,msg,time){
		db.transaction(function(tx){
				tx.executeSql('insert into MsgData values(?,?,?)',[name,msg,time],function(tx,result){
						alert("登陆成功"); 
					},
					function(tx,error){
							alert(error.source+':'+error.message);
						});
			});
	}

function saveData(){
		var name = getE('name').value;
		var msg = getE('msg').value;
		var time = new Date().getTime();
		addData(name,msg,time);
		showAllData();
	}