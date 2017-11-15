// JavaScript Document

//将随机的数字显示在随机的位置上
function showNumberWithAnimation( i , j , randNumber ){
	
	var numberCell = $('#number-cell-' + i + "-" + j );
	
	numberCell.css('background-color',getNumberBackgroundColor( randNumber ));
	numberCell.css('color',getNumberColor( randNumber ));
	numberCell.text( randNumber );
	
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop( i , j ),
		left:getPosLeft( i , j )
	},50);
}
 
 //显示方格移动的动画效果
 function showMoveAnimation( fromx , fromy , tox , toy ){
	 
	 var numberCell = $('#number-cell-' + fromx + '-' + fromy);
	 numberCell.animate({
		 top:getPosTop( tox , toy ),
		 left:getPosLeft( tox , toy )
	 },200); 
 }
 
 //更新分数显示
 function updateScore( score ){
	$('#score').text( score );
 }