<?php
	require "tech_box.php";
	function get_brands($option){
		global $con;
		$get_brands_query = "select * from brands";
		$result = mysqli_query($con, $get_brands_query);
		while($row = mysqli_fetch_assoc($result)){
			$title = $row['brand_name'];
			$id = $row['brand_id'];
			if ($option == 0){
                echo "<li><a class='nav-link' href='#''>$title</a></li>";
            }
            else if ($option == 1){
                echo "<option>$title</option>";
            }
		}
	}
