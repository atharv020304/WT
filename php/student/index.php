<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="add.php" method="post" id="stuForm" >
      <label>Enter Roll No. : </label><input type="number" name="roll" id="roll"/>
      <br>
      <label>Enter Stu Name. : </label><input type="text" name="name" id="name"/>
      <br>
      <button type="submit" name="submit" id="btn">Add</button>
    </form>

    <br>
    <br>
    <br>

    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>Roll No.</th>
          <th>Name</th>
          <th>Delete</th>
        </tr>
      </thead >
      <tbody>
        <?php 
        
        include "db.php";
        $q = "select * from stu";
        $result = $conn->query($q);
        while($row = $result->fetch_assoc()){
          echo "<tr>

                <td>{$row['roll']}</td>
                <td>{$row['name']}</td>
                <td><a href='delete.php?id={$row['roll']}'>Delete</a></td>
            </tr>";

        }        
        ?>
      </tbody>
    </table>
    <script src="validate.js" defer></script>
  </body>


</html>
