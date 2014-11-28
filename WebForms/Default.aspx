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
        <h1 class="text-center">Gerador de QRCode</h1>
        <div class="col-md-2 text-center">
            <p><img class="disabled" src="<%=ResolveUrl("~/Images/icones/inbox/128.png")%>" /></p>
            <p><a href="#" class="btn btn-primary disabled" title="clique aqui para fazer o download">Download</a></p>
        </div>
        <div class="col-md-7">
            <form role="tabpanel">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Dados</a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Configurações</a></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
                <fieldset role="tabpanel" class="tab-pane active" id="home">
                    <legend>Dados</legend>
                    <div class="form-group">
                        <label for="id001">URL</label>
                        <input type="email" class="form-control" id="id001" placeholder="Enter email">
                    </div>
                </fieldset>
                <fieldset role="tabpanel" class="tab-pane" id="profile">
                    <legend>Configuração</legend>
                    <div class="form-group">
                        <label for="id002">Outro form</label>
                        <input type="email" class="form-control" id="id002" placeholder="Enter email">
                    </div>
                </fieldset>
             </div>
            </form>
        </div>        
        <div class="col-md-3 text-center">
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
            <a href="#" class="btn btn-link" title="clique aqui para fazer o download"><img src="<%=ResolveUrl("~/Images/icones/globe/32.png")%>" /></a>
        </div>
    </div>
    <!--
    <p class="glyphicon glyphicon-globe text-center" style="font-size:25em;padding:10px;"></p>
    -->
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/jquery-1.11.1.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/bootstrap.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/default.js")%>"></script>
  </body>
</html>
