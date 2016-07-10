

<?php
/**
 * Created by PhpStorm.
 * User: ngleungtsan
 * Date: 7/5/16
 * Time: 9:09 AM
 */

echo "123213";

//echo file_get_contents( "main_page.html" );
?>



<div>
    <img id="test1" src="src/test1.jpg" height="200" width="200" style="display:;">
    <img id="test2" src="src/test2.jpg" height="200" width="200" style="display:none;">
    <img id="test3" src="src/test3.jpg" height="200" width="200" style="display:none;">

    <button onclick="previous();">Previous</button>
    <button onclick="next()">Next</button>

</div>


<script type="text/javascript">

    var oTest1 = document.getElementById("test1");
    var oTest2 = document.getElementById("test2");
    var oTest3 = document.getElementById("test3");

    var container = [oTest1, oTest2, oTest3];

    var index = 0;

    function previous(){

        if(index == 0){

        } else if(index == 1){
            container[0].style.display = '';
            container[1].style.display = 'none';
            container[2].style.display = 'none';
            index--;
        } else {
            container[0].style.display = 'none';
            container[1].style.display = '';
            container[2].style.display = 'none';
            index--;
        }
    }

    function next(){

        if(index==0){
            container[0].style.display = 'none';
            container[1].style.display = '';
            container[2].style.display = 'none';
            index++;
        }else if(index==1){
            container[0].style.display = 'none';
            container[1].style.display = 'none';
            container[2].style.display = '';
            index++;
        }else {
        }
    }

</script>