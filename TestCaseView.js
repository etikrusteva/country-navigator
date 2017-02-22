<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head profile="http://selenium-ide.openqa.org/profiles/test-case">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="selenium.base" href="http://localhost:3000/" />
<title>TestCaseView</title>
</head>
<body>
<table cellpadding="1" cellspacing="1" border="1">
<thead>
<tr><td rowspan="1" colspan="3">TestCaseView</td></tr>
</thead><tbody>
<tr>
	<td>open</td>
	<td>/#/countries</td>
	<td></td>
</tr>
<tr>
	<td>click</td>
	<td>//a[contains(text(),'View')]</td>
	<td></td>
</tr>
<tr>
	<td>click</td>
	<td>css=button.btn.btn-info</td>
	<td></td>
</tr>
<tr>
	<td>click</td>
	<td>//input[@type='number']</td>
	<td></td>
</tr>
<tr>
	<td>type</td>
	<td>//input[@type='number']</td>
	<td>20</td>
</tr>
<tr>
	<td>click</td>
	<td>//div[@id='myModal']/div/div/div[2]/select</td>
	<td></td>
</tr>
<tr>
	<td>select</td>
	<td>//div[@id='myModal']/div/div/div[2]/select</td>
	<td>label=BGN</td>
</tr>
<tr>
	<td>click</td>
	<td>css=option[value=&quot;BGN&quot;]</td>
	<td></td>
</tr>
<tr>
	<td>click</td>
	<td>//div[@id='myModal']/div/div/div[2]/select[2]</td>
	<td></td>
</tr>
<tr>
	<td>select</td>
	<td>//div[@id='myModal']/div/div/div[2]/select[2]</td>
	<td>label=EUR</td>
</tr>
<tr>
	<td>click</td>
	<td>xpath=(//option[@value='EUR'])[2]</td>
	<td></td>
</tr>
<tr>
	<td>click</td>
	<td>xpath=(//button[@type='button'])[4]</td>
	<td></td>
</tr>

</tbody></table>
</body>
</html>
