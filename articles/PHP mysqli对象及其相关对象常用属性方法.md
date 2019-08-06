---
title: PHP mysqli对象及其相关对象常用属性方法
introduction: 命令收集
---

#### 一、建立mysqli对象
	@ $db=new mysqli('$host','$username','$password','$dbname','$port','$socket')
参数分别为数据库服务器地址、数据库用户名、用户名对应的密码、数据库名称、数据库端口、数据库套接字。

#### 二、检测mysql连接正确
	mysqli_connect_errno()
连接失败返回true，成功返回false。

#### 三、选择数据库
	$db->select_db('$dbname')
$db为mysqli对象，参数为数据库名称。

#### 四、查询数据库
	$result=$db->query($query)
$db为mysqli对象，$result为结果对象，参数为数据库查询语句。

#### 五、检索查询结果
	$num_results=$result->num_rows
	$row=$result->fetch_assoc()
	$row=$result->fetch_object()
	$row=$result->fetch_row($result)
$result为结果对象，$num\_results为查询返回的行数。第一个$row为一个关联数组，为数据库中一条记录，每个关键词为一个属性（字段）名，每个值为字段中相应的值。第二个$row为一个对象，为数据库中一条记录，字段名作为其属性可以访问每个字段对应的值（$row-\>name）。第三个$row为一个数字索引数组，为数据库中一条记录，$row[0]、$row[1]…等列出每个值。

#### 六、从数据库断开连接
	$result->free()
	$db->close()
$db为mysqli对象，$result为结果对象。free方法释放结果集，close方法关闭连接。

#### 七、修改数据库查询时返回行数
	$db->affected_rows
$db为mysqli对象。

#### 八、发送查询模板，根据模板查询
	$stmt=$db->prepare($query)
	$stmt->bind_param('$data',...[,...])
	$stmt->execute()
$db为mysqli对象，$stmt为结果对象，$query为数据库查询语句模板（变量用问号代替），$data表示其后每个参数的数据类型（比如sssd）。第一个语句发送查询模板，第二个语句发送替换模板中问号的变量，第三个语句真正运行查询。
