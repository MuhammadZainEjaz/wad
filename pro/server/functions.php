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
		$get_categories_query = "select * from categories";
		$result = mysqli_query($con, $get_categories_query);
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

    function show_data_on_content_page(){
        global $con;
        $get_products_query = "select * from products";
        $result = mysqli_query($con, $get_products_query);
        while($row = mysqli_fetch_assoc($result)){
            $title = $row['pro_title'];
            $query = $row['pro_cat'];
            $result1 = mysqli_query($con, "select * from categories where cat_id = $query");
            $pro_cat_id = mysqli_fetch_assoc($result1)['cat_title'];
            $query = $row['pro_brand'];
            $result1 = mysqli_query($con, "select * from brands where brand_id = $query");
            $pro_brand_id = mysqli_fetch_assoc($result1)['brand_title'];
            $price = $row['pro_price'];
            $pro_desc = $row['pro_desc'];
            $pro_keywords = $row['pro_keywords'];
            echo "$title </br>";
            echo "$pro_cat_id</br>";
            echo "$pro_brand_id </br>";
            echo "$price </br>";
            echo "$pro_desc </br>";
            echo "$pro_keywords </br> </br>";
        }
    }
