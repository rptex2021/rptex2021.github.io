var a = ['', 'One ', 'Two ','Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ',
		'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
var b =	['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
	
function print_today() {
  // ***********************************************
  // AUTHOR: WWW.CGISCRIPT.NET, LLC
  // URL: http://www.cgiscript.net
  // Use the script, just leave this message intact.
  // Download your FREE CGI/Perl Scripts today!
  // ( http://www.cgiscript.net/scripts.htm )
  // ***********************************************
  var now = new Date();
  //var now1 = new Date("DD MM YYYY");
  //alert(now1);
  var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
  var today =  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear()));
  return today;
}

// from http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals) {
  var newString;// The new rounded number
  decimals = Number(decimals);
  if (decimals < 1) {
    newString = (Math.round(number)).toString();
  } else {
    var numString = number.toString();
    if (numString.lastIndexOf(".") == -1) {// If there is no decimal point
      numString += ".";// give it one at the end
    }
    var cutoff = numString.lastIndexOf(".") + decimals;// The point at which to truncate the number
    var d1 = Number(numString.substring(cutoff,cutoff+1));// The value of the last decimal place that we'll end up with
    var d2 = Number(numString.substring(cutoff+1,cutoff+2));// The next decimal, after the last one we want
    if (d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
      if (d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
        while (cutoff > 0 && (d1 == 9 || isNaN(d1))) {
          if (d1 != ".") {
            cutoff -= 1;
            d1 = Number(numString.substring(cutoff,cutoff+1));
          } else {
            cutoff -= 1;
          }
        }
      }
      d1 += 1;
    } 
    if (d1 == 10) {
      numString = numString.substring(0, numString.lastIndexOf("."));
      var roundedNum = Number(numString) + 1;
      newString = roundedNum.toString() + '.';
    } else {
      newString = numString.substring(0,cutoff) + d1.toString();
    }
  }
  if (newString.lastIndexOf(".") == -1) {// Do this again, to the new string
    newString += ".";
  }
  var decs = (newString.substring(newString.lastIndexOf(".")+1)).length;
  for(var i=0;i<decimals-decs;i++) newString += "0";
  //var newNumber = Number(newString);// make it a number if you like
  return newString; // Output the result to the form field (change for your purposes)
}

		
function validatePage(){

	var var1 = document.getElementById("invNo").value;
	var1= var1.trim();
	var pan = document.getElementById("panNo").value;
	var Errors="";
	var chk=0;
	
	if(""==(var1)){
		Errors=Errors+"\nEnter Bill Number!!!!";
		chk=1;
	}
	if(isNaN(var1)) {
		Errors=Errors+"\nWrong Bill Number!!!!";
		chk=1;
	}
	var1 = document.getElementById("tin").value;
	
	if(var1.length!=15){
		Errors=Errors+"\nWrong GSTIN!!!!!";
		chk=1;
	}
	var1 = document.getElementById("customer-title").value;
	if(""==var1.trim() ){
		Errors=Errors+"\nEnter Party Address!!!!!";
		chk=1;
	}
	
	var1 = document.getElementById("due").textContent;
	
	if(""==var1.trim() ||
	"0.00"==var1.trim()){
		Errors=Errors+"\nEnter Purchase  Details!!!!!";
		chk=1;
	}
	var1 = document.getElementById("terms2-text").value;
	if(""==var1.trim() ){
		Errors=Errors+"\nEnter LR  Details.!!!!!";
		chk=1;
	}

	if(chk==1){
	alert(Errors);
	return;
	}
	//alert(this.documentFileName);
	//this.saveAs();
	window.print();
}
function fillDesc(){

var party = document.getElementById("hsn").value;
	var desc="";
	if("1"==party){
		desc="Cotton Yarn";
		$("#itemDetail").val(desc);
		
	}else if("0"==party){
		desc="100% Fine Cotton Grey Cloth";
		$("#itemDetail").val(desc);
		
	}
}
function fillPartyDetails() {

	var party = document.getElementById("party").value;
	//alert(party);
	var pAddress="";
	if("1"==party){
		pAddress="MAAVIRTRA TEXTILE,\nSHERIFF COLONY,\nTIRUPUR.";
		$("#customer-title").val(pAddress);
		$("#tin").val("33APBPA1895B1ZJ");
	}else if("2"==party){
		pAddress="SRI MUTHULAKSHMI TEX,\nTIRUPPUR";
		$("#customer-title").val(pAddress);
		$("#tin").val("33AHIPR7675K1ZN");
	}else if("3"==party){
		pAddress="KEERTHI MARKETING,\n53/3, NALLAPAN NAGAR,\nKARUR - 639004.";
		$("#customer-title").val(pAddress);
		$("#tin").val("33CSNPM6641N1Z4");
	}else if("4"==party){
		pAddress="VISHNU PRIYA FAB,\n17/128-A, VALLUVAR ST,\nAVINASI - 641654,\nTirupur.";
		$("#customer-title").val(pAddress);
		$("#tin").val("33AMBPM2678P1ZL");
	}else if("5"==party){
		pAddress="SUN TEX,\n124/1, North Street,\nSendeviPalayam Road,\nKarugamPalayam Post,\nPalladam Tk,\nTirupur.";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("6"==party){
		pAddress="SHRI ANGALAMMAN COTTONS AND TEXTILE MILLS,\n10/72, Chinna Puthur,\nAgrahara Puthur Post,\nMangalam(via),\nTirupur.";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("7"==party){
		pAddress="KPN TEX,\n5/510, Seerthankadu,\nSulthanpet,\nMangalam Post,\nTirupur - 641 663";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("8"==party){
		pAddress="CMB SPINNINIG MILLS,\nS.f.no.226/3, Poomalur Village,\n63 VelamPalayam Post,\nMangalam Via,\nPalladam Tk,\nTirupur Dt - 641 663";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("9"==party){
		pAddress="Sivakami Trading Company,\n28, Mahatma gandhi road,\nSIHS colony,\nCoimbatore";
		$("#customer-title").val(pAddress);
		$("#tin").val("");	
	}else if("10"==party){
		pAddress="Kamalam Textiles,\n3/45, Ganesher Street,\nGanapathi Palayam,\nKarumatham patti(via),\nCoimbatore - 641 659.";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("11"==party){
		pAddress="Tirumalavasa Cotton and Textile Mills,\n4/321-1, Vengamadu,\nMangalam Road,\nPudhupalayam post,\nAvinashi - 641654.";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("12"==party){
		pAddress="";
		$("#customer-title").val("PKM Textiles,\n1/205, Pudhu kinathu thottam,\nParuvai, Palladam,\nTirupur - 641 658.");
		$("#tin").val("");
	}else if("13"==party){
		pAddress="M.P Textiles\n6/169, K.R Mill Road,\nSomanur, Coimbatore-641 668.";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}else if("14"==party){
		pAddress="";
		$("#customer-title").val(pAddress);
		$("#tin").val("");
	}
	
}
function update_less(){
var total = 0;
var less = document.getElementById("less").value;
//alert("less"+less);
var qty = document.getElementById("qty1").value;
//alert("qty"+qty);
total = qty * (100-Number(less))/100;

  total = roundNumber(total,0);
  total = qty-total;
  //alert("total"+total);
  $('#fless').html(""+total);
  $('#qty').html(""+qty-total);
}
function update_total() {

  var total1 = 0;
var qty = document.getElementById("qty").innerHTML;
var price = document.getElementById("cost").value;
var disc = document.getElementById("disc").value;
var vatamt4 = document.getElementById("vatamt4").value;
if(isNaN(vatamt4))
{vatamt4=0;}
total1 = qty*price;
  total1 = roundNumber(total1,2);
var total = total1 * (100-Number(disc))/100;
 total = roundNumber(total,2);
  $('#subtotal').html(""+total1);
  $('#total').html(""+total);
  $('#disc1').html(""+total);
  var total2= parseFloat(total,2)+ parseFloat(vatamt4,2);
  //var vat1 = $("#vat").html().replace(" ","");
  var cgst = document.getElementById("CGST").value;
  var sgst = document.getElementById("SGST").value;
  var igst = document.getElementById("IGST").value;
  vatamt1 = (cgst/100) * roundNumber(total2,2);
  vatamt2 = (sgst/100) * roundNumber(total2,2);
  vatamt3 = (igst/100) * roundNumber(total2,2);
  vatamt1 = roundNumber(vatamt1,2);
  vatamt2 = roundNumber(vatamt2,2);
  vatamt3 = roundNumber(vatamt3,2);
  $('#vatamt1').html(""+vatamt1);
  $('#vatamt2').html(""+vatamt2);
  $('#vatamt3').html(""+vatamt3);
  vatamt = parseFloat(vatamt1,2)+ parseFloat(vatamt2,2) + parseFloat(vatamt3,2) + parseFloat(vatamt4,2);
  //alert("vatamt "+vatamt);
  //update_balance();
   var due = parseFloat(total,2)+ parseFloat(vatamt,2);
  //alert(due);
  var due2 = roundNumber(due,0);
  due2 = Math.round((due2-due)*100)/100;
  
  //if(due!=0)
	//alert(due2-due);
	 //$('.roundoff').html(""+due2-due);
	  $('#roundoff').html(""+due2);
  
   due = parseFloat(total,2)+ parseFloat(vatamt,2) + parseFloat(due2,2);
    due = roundNumber(due,2);
    $('.due').html(""+due);
   var str = inWords(parseInt(due));
   //alert(str);
   
   $('.inwords').html("    "+str);

}


function inWords(num){
   
	
	var str='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	if((num = num.toString()).length > 9) return 'overflow';
	//alert("else :"+num);
	n = ('000000000'+num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
	//alert(":"+n[1]+ ' ' + n[2] + ' ' + n[3] + ' ' + n[4] + ' ' + n[5] );
	if(!n) return; 
	
	if(n[1]!=0)
	str += (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ';
	else
	str+='';
	if(n[2]!=0)
	str += (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ';
	else
	str+='';
	if(n[3]!=0)
	str += (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ';
	else
	str+='';
	if(n[4]!=0)
	str += (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ';
	else
	str+='';
	if(n[5]!=0)
	str += ((str!='')?'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only. ';
	else
	str+='only.';
	return str;
}

function update_balance() {
  //var due = $("#subtotal").html().replace("$","") + $("#vatamt").html().replace("","");
  var due = total+vatamt;
  alert(due);
  due = roundNumber(due,2);
  
  $('.due').html(""+due);
}

function update_price() {

  var row = $(this).parents('.item-row');
  var price = row.find('.cost').val().replace("$","") * row.find('.qty').val();
  price = roundNumber(price,2);
  isNaN(price) ? row.find('.price').html("N/A") : row.find('.price').html(""+price);
  if(price==0){
    row.find('.price').html("");
  }
  update_total();
}

function check_tin() {
	
	var tin1 = document.getElementById("tin").value;
	
	if(tin1.length!=15){
		alert("Wrong GSTIN");
	}
	
}
function bind() {
  $(".cost").blur(update_price);
  $(".qty").blur(update_price);
  $(".vat").blur(update_price);
  $(".tin").blur(check_tin);
}

$(document).ready(function() {

  $('input').click(function(){
    $(this).select();
  });

  $("#paid").blur(update_balance);
   
  $("#addrow").click(function(){
    $(".item-row:last").after('<tr class="item-row"><td class="item-name"><div class="delete-wpr"><textarea>Item Name</textarea><a class="delete" href="javascript:;" title="Remove row">X</a></div></td><td class="description"><textarea>Description</textarea></td><td><textarea class="cost">$0</textarea></td><td><textarea class="qty">0</textarea></td><td><span class="price">$0</span></td></tr>');
    if ($(".delete").length > 0) $(".delete").show();
    bind();
  });
  
  bind();
  
  $(".delete").live('click',function(){
    $(this).parents('.item-row').remove();
    update_total();
    if ($(".delete").length < 2) $(".delete").hide();
  });
  
  $("#cancel-logo").click(function(){
    $("#logo").removeClass('edit');
  });
  $("#delete-logo").click(function(){
    $("#logo").remove();
  });
  $("#change-logo").click(function(){
    $("#logo").addClass('edit');
    $("#imageloc").val($("#image").attr('src'));
    $("#image").select();
  });
  $("#save-logo").click(function(){
    $("#image").attr('src',$("#imageloc").val());
    $("#logo").removeClass('edit');
  });
  
  $("#date").val(print_today());
  
});