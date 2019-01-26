<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <script type="text/javascript" src="dsoframer.js"></script>
  </head>
  
  <body>    
		<input type="button" value="新建" onclick="newFramer()" />
		<script type="text/javascript">
			function newFramer() {
			   popwin('dsoframer.jsp',700,500,1);
			   //popModelWin('dso_test.jsp',this,700,500);
			}
        </script>    
  </body>
</html>
