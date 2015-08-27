
<html>
	<head>
	<style type="text/css">
//	body{
//		background-color:#9966cc;
//	}
	</style>
	</head>
	<body>
		<Script>
			/*mm=1+2;
			zz=eval("1+2");
			document.write("1+2=",zz);*/
			var the_unevaled_answer="3+3";
			var the_evaled_answer=eval(the_unevaled_answer);
			//var the_evaled_answer=eval("3+3");
			document.write("the un-evaled answer is " + the_unevaled_answer);
				document.write("the evaled answer is " + the_evaled_answer);
		//	document.write("the un-evaled answer is " + the_unevaled_answer + ",the evaled answer is " + the_evaled_answer);
		//	alert("the un-evaled answer is " + the_unevaled_answer + "the evaled answer is " + the_evaled_answer);
		</Script>
	</body>
</html>
