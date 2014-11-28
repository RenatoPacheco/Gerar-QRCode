<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebForms.Default" %>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gerador de QRCode</title>
    <link href="<%=ResolveUrl("~/Content/bootstrap.min.css")%>" rel="stylesheet">
    <link href="<%=ResolveUrl("~/Content/default.min.css")%>" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/html5shiv.min.js")%>"></script>
      <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/respond.min.js")%>"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
        <h1>Gerador de QRCode</h1>
    </div>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/jquery-1.11.1.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/bootstrap.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/default.js")%>"></script>
  </body>
</html>
