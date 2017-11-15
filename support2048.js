/**
 * Created by Sunny on 14-4-11.
 * my QQ: 670453367
 */
 //获取数字或者方格的x y坐标位置
function getPosTop( i , j ){
    return 20 + i*120;
}

function getPosLeft( i , j ){
    return 20 + j*120;
}

//用awitch获取不同数字的背景颜色
function getNumberBackgroundColor( number ){
	switch( number ){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8196:return "#93c";break;
	}
	
	return "black";
}

//获取数字颜色
function getNumberColor( number ){
	if( number <= 4 )
		return "#776e65";
		
		return "white";
}
 
 //判断界面中是否还有空格
 function nospace( board ){
	 for( var i = 0 ; i < 4 ; i ++ )
	 	for( var j = 0 ; j < 4 ; j ++ )
			if( board[i][j] == 0 )
				return false;
			
	 return true;	
 }
 
 //以下四个方法分别用于判断方块是否可以向左右上下运动，移动路径中的方格如果全是0或者和移动方格存储的数字一样，返回值true
 function canMoveLeft( board ){
	 for( var i = 0 ; i < 4 ; i ++ )
	 	for ( var j = 1 ; j < 4 ; j ++ )
			if( board[i][j] != 0 )
				if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
					return true;
					
	return false;	
 }
 
 function canMoveRight( board ){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 2 ; j >=0 ; j -- )
			if( board[i][j] != 0)
				if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
					return true;
					
	return false;	 
 }
 
 function canMoveUp( board ){
	 for( var j = 0 ; j < 4 ; j ++ )
	 	for( var i = 1 ; i < 4 ; i ++ )
			if( board[i][j] != 0 )
				if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
					return true;
					
	return false;
 }

 function canMoveDown ( board ){
	 for( var j = 0 ; j < 4 ; j ++ )
	 	for( var i = 2 ; i >= 0 ; i -- )
			if( board[i][j] != 0 ) 
				if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
					return true;
					
	return false; 
 }
 
 //以下两个方法判断左右（上下）移动方块与移动后的位置中间是否有不为0的方块，有返回false，无返回true
 function noBlockHorizontal( row , col1 , col2 , board ){
	 for( var i = col1 + 1 ; i < col2 ; i ++ )
	 	if( board[row][i] != 0 )
			return false;
			
	 return true;	 
 }

 function noBlockVertical( row , col1 , col2 , board ){
	 for( var i = col1 + 1 ; i < col2 ; i ++ )
	 	if( board[i][row] != 0 )
			return false;
			
	return true;
 }
 
 //判断游戏是否结束时，用于判断所有方块是否可以移动，是返回false，否返回true
 function nomove( board ){
	if( canMoveLeft( board ) || canMoveRight( board ) ||
		canMoveDown( board ) || canMoveUp( board ) )
		return false;
		
	return true; 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 