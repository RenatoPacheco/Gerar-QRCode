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
    <h1 class="text-center">Gerador de QRCode</h1>
    <h2 class="text-center">#1</h2>
    <div class="container" id="ex1"></div>
    <h2 class="text-center">#2</h2>
    <div class="container" id="ex2"></div>
    <h2 class="text-center">#3</h2>
    <div class="container" id="ex3"></div>
    <!--
    <p class="glyphicon glyphicon-trash text-center" style="font-size:25em;padding:10px;"></p>
    -->
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/jquery-1.11.1.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/bootstrap.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/gerarqrcode/GerarQRCode.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/preload-image/jquery.preload-image.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/default.js")%>"></script>
  </body>
</html>
