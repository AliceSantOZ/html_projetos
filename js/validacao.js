<! DOCTYPE html >
	< html >
	< cabeça >
	    < title > Validação de formulários - Com Java Script </ title >  
	</ cabeça >
	< corpo >
	 
	< formulário  action = " página de ação " method = " post " name = " dados " onSubmit = " return enviardados (); " >
	    < linguagem do script  = " JavaScript " >
	função  enviardados ( ) {
	  
	if ( documento . dados . nome_tx . valor == ""  ||  documento . dados . nome_tx . valor . comprimento  <  8 )
	{
	alert (  "Preencha o campo NOME corretamente!"  ) ;
	documento . dados . tx_nome . foco ( ) ;
	retornar  falso ;
	}
	  
	  
	if (  documento . dados . tx_email . valor == ""  ||  documento . dados . tx_email . valor . indexOf ( '@' ) == - 1  ||  documento . dados . tx_email . valor . indexOf ( '.' ) = = - 1  )
	{
	alerta (  "Preencha o campo E-MAIL corretamente!"  ) ;
	documento . dados . tx_email . foco ( ) ;
	retornar  falso ;
	}
	  
	if  ( documento . dados . tx_mensagem . value == "" )
	{
	alerta (  "Preencha o campo MENSAGEM!"  ) ;
	documento . dados . tx_mensagem . foco ( ) ;
	retornar  falso ;
	}
	  
	if  ( documento . dados . tx_mensagem . value . length  <  50  )
	{
	alert (  "É necessário preencher o campo MENSAGEM com mais de 50 caracteres!"  ) ;
	documento . dados . tx_mensagem . foco ( ) ;
	retornar  falso ;
	}
	  
	return  true ;
	}
	  
	</ script >
	

	  < largura da tabela  = " 588 " borda = " 0 " align = " center " >
	    < tr >
	      < td  width = " 118 " > < font  size = " 1 " face = " Verdana, Arial, Helvética, sem serifa " > Nome completo: </ font > </ td >
	      < td  width = " 460 " >
	        < Input  nome = " tx_nome " tipo =" texto " class =" formbutton " id =" tx_nome " tamanho =" 52 " maxlength =" 150 " >
	      </ td >
	    </ tr >
	    < tr >
	      < td > < font  size = " 1 " face = " Verdana, Arial, Helvética, sem serifa " > E-mail: </ font > </ td >
	      < td > < tamanho da fonte  = " 2 " >
	        < Input  nome = " tx_email " tipo =" texto " id =" tx_email " tamanho =" 52 " maxlength =" 150 " class =" formbutton " >
	      </ fonte > </ td >
	    </ tr >
	    < tr >
	      < td > < font  face = " Verdana, Arial, Helvética, sans-serif " > < font  size = " 1 " > Mensagem < forte > : </ forte > </ fonte > </ fonte > </ td >
	      < td  linhaspan = " 2 " > < tamanho da fonte  = " 2 " >
	        < textarea  name = " tx_mensagem " cols = " 50 " linhas = " 8 " class = " formbutton " id = " tx_mensagem " input  > </ textarea >
	      </ fonte > </ td >
	    </ tr >
	    < tr >
	      < td  height = " 85 " > < p > < forte > < font  face = " Verdana, Arial, Helvética, sem serifa " > < font  size = " 1 " >
	      </ fonte > </ fonte > </ forte > </ p > </ td >
	    </ tr >
	    < tr >
	      < td  height = " 22 " > </ td >
	      < td >
	        < input  name = " Submit " type = " submit "   class = " formobjects " value = " Enviar dados " >
	  < input  name = " Reset " type = " reset " class = " formobjects " value = " Redefinir " >
	      </ td >
	    </ tr >
	  </ tabela >
	</ form > 
	</ corpo >
	</ html >
