<?php
$benifits =   array("Reducing Climate Change", "Purifying Air", "Cooling Down the Streets", "Natural Air Conditioning", "Saving Water", "Preventing Water Pollution" , "Providing Shelters for Wildlife", "Renewable Energy Source", "Reinforcing Soil", "Erosion Control"); ?>


<ul>
    <?php
    for ($i=0;$i<10;$i+=1){
      ?>
      <li>
      <?php
      echo $benifits[$i];?>
      </li>
      <?php
    }
    ?>
</ul>