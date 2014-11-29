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
            <p>
                <img class="preview" width="128" height="128" src="<%=ResolveUrl("~/Images/icones/picture/128.png")%>" />
                <img class="preloader" width="128" height="128" src="<%=ResolveUrl("~/Images/icones/preloader/128.gif")%>" />
            </p>
            <p><a href="#" class="btn btn-primary disabled download" title="clique aqui para fazer o download">Download</a></p>
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
                        <label for="form_001">URL</label>
                        <input name="valor" type="text" class="form-control" id="form_001" placeholder="http://endereco.com.br">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Gerar QRCode</button>
                    </div>
                </fieldset>
                <fieldset role="tabpanel" class="tab-pane" id="profile">
                    <legend>Configuração</legend>
                    <div class="form-group col-sm-4">
                        <label>Tipo</label>
                        <select class="form-control" name="modo">
                            <option value="ALPHA_NUMERIC">Alfa-Numérico</option>
                            <option value="BYTE" selected="selected">Byte</option>
                            <option value="NUMERIC">Numério</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-4">
                        <label>Nível de correção</label>
                        <select class="form-control" name="correcao">
                            <option value="L">Nível L - até 7%</option>
                            <option value="M" selected="selected">Nível M - até 15%</option>
                            <option value="Q">Nível Q - até 25%</option>
                            <option value="H">Nível H - até 30%</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-2">
                        <label>Tamanho</label>
                        <select class="form-control" name="escala">
                            <option value="1" selected="selected">100%</option>
                            <option value="1,5">150%</option>
                            <option value="2">200%</option>
                            <option value="3">300%</option>
                            <option value="4">400%</option>
                        </select>
                    </div>                    <div class="form-group col-sm-2">
                        <label>Versão</label>
                        <select class="form-control" name="versao">
                            <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option><option>40</option>
                        </select>
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
    <p class="glyphicon glyphicon-picture text-center" style="font-size:25em;padding:10px;"></p>
    -->
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/jquery-1.11.1.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/bootstrap.min.js")%>"></script>
    <script type="text/javascript" src="<%=ResolveUrl("~/Scripts/default.js")%>"></script>
  </body>
</html>
