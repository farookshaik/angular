

<!DOCTYPE html>
<%@page import="java.util.Properties"%>
<html>
<head>
	<script src="Forms/Scripts/jquery-2.0.3.js"></script>	
	<link href="Forms/theme/bootstrap.min.css" rel="stylesheet" />	
	<link href="Forms/theme/Styles.css" rel="stylesheet" />	
	<style>
	body {
	   display: block;
		margin: 0px;
	}

	.app-header {
		background-color: #18B1B4;
		color: #fff;
		border-radius: 0;
		padding-left: 15px;
	}

	.app-header>h4 {
		height: 50px;
		line-height: 50px;
		margin: 0;
	}

	</style>
	
	<%
		String ScreenURL = request.getRequestURI();
		String ContextPath = request.getContextPath();
		String FormName = request.getParameter("formName");
		
		Properties props = new Properties();
		props.load(getClass().getResourceAsStream("/config.properties"));

		String BaseUrl = props.getProperty("BaseUrl");
		String OffendersByTypeUrl = props.getProperty("OffendersByTypeUrl");
		String InmateSummaryUrl = props.getProperty("InmateSummaryUrl");
		String ParoleSummaryUrl = props.getProperty("ParoleSummaryUrl");
		String SentenceByTypeUrl = props.getProperty("SentenceByTypeUrl");
		String OffendersByResidenceUrl = props.getProperty("OffendersByResidenceUrl");
		String CriminalStatsSummaryUrl = props.getProperty("CriminalStatsSummaryUrl");		
	%>
	
	<script>
		  
		$(document).ready(function(){
		 
				var ScreenURL = "<%=ScreenURL%>";
				var ContextPath = "<%=ContextPath%>";

				var configData = {};
				configData.BaseUrl = "<%=BaseUrl%>";				
				configData.OffendersByTypeUrl = "<%=BaseUrl+OffendersByTypeUrl%>";
				configData.InmateSummaryUrl = "<%=BaseUrl+InmateSummaryUrl%>";
				configData.ParoleSummaryUrl = "<%=BaseUrl+ParoleSummaryUrl%>";
				configData.SentenceByTypeUrl = "<%=BaseUrl+SentenceByTypeUrl%>";
				configData.OffendersByResidenceUrl = "<%=BaseUrl+OffendersByResidenceUrl%>";
				configData.CriminalStatsSummaryUrl = "<%=BaseUrl+CriminalStatsSummaryUrl%>";
				
				sessionStorage.setItem("configData", JSON.stringify(configData));										
				debugger;
			
				var path = ContextPath+"/Forms/ParoleDashbord/index.html";		    
				$("#viewContainer").attr("src",path);								
				
																								
		});		

	</script>
</head>
<body>
 <div>
     
	  <div class="Preview-header">
            <h4 class="text-left" id="applicationHeaderText">Parole Dashboard</h4>
      </div>		  
	
	  <iframe id="viewContainer" class="Preview-viewport" src="" />
   </div>
</body>
</html>
