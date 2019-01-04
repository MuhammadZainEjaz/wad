<?php
	require "tech_box.php";
	function get_brands($option){
		global $con;
		$get_brands_query = "select * from brands";
		$result = mysqli_query($con, $get_brands_query);
		while($row = mysqli_fetch_assoc($result)){
			$title = $row['brand_title'];
			$id = $row['brand_id'];
			if ($option == 0){
                echo "<li><a class='nav-link' href='#''>$title</a></li>";
            }
            else if ($option == 1){
                echo "<option value=$id>$title</option>";
            }
		}
	}

	function get_categories($option){
		global $con;
		$get_brands_query = "select * from categories";
		$result = mysqli_query($con, $get_brands_query);
		while($row = mysqli_fetch_assoc($result)){
			$title = $row['cat_title'];
			$id = $row['cat_id'];
			if ($option == 0){
                echo "<li><a class='nav-link' href='#''>$title</a></li>";
            }
            else if ($option == 1){
                echo "<option value=$id>$title</option>";
            }
		}
	}
