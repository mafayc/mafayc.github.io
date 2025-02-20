//listObjects();


function listObjects(){//发起请求
	var bucketName =  document.getElementById('bucketname').value;
	var obs = getObsClient();
	obs.listObjects({Bucket: bucketName}).then(function(result)  
	{
		if(result.CommonMsg.Status < 300)
		{	var name;
			console.log('开始-获取文件:（文件数量小于100时本脚本有效）\n');
			for(var j=0;j<result.InterfaceResult.Contents.length;j++)
			{
				name=result.InterfaceResult.Contents[j]['Key'];
				console.log('\t文件'+j+'：' +name );
				ADDaudio(name,j,"https://yuan-music.obs.cn-north-4.myhuaweicloud.com/"+name);

			}
			console.log('结束-获取文件\n');			
		}
	});
}


function getObsClient(){//初始化 OBS
    /*
    * Initialize a obs client instance with your account for accessing OBS
    使用您的账户初始化 OBS 客户端实例以访问 OBS
    */
   var ak = document.getElementById('ak').value;
   var sk = document.getElementById('sk').value;
   var server = document.getElementById('server').value;
   return new ObsClient({
       access_key_id: ak,
       secret_access_key: sk,
       server : server,
       timeout : 60 * 5,
   });
}


function ADDaudio(mingzi,xuhao,dizhi){//初始化 OBS
	var strxuhao ="audioID"+xuhao;
    var fu = document.getElementById("audiodiv");	//锁定欲添加位置
    var zi = document.createElement("p");		  	//添加p标签
    zi.innerText=mingzi;							//p标签的文本，歌曲名，变量
    fu.appendChild(zi);

    zi = document.createElement("audio");
    zi.controls="audio";
    zi.id=strxuhao;								//名称序号，变量
    fu.appendChild(zi);

    fu = document.getElementById(strxuhao);		//名称序号，变量
    zi= document.createElement("source");
    zi.src=dizhi;								//音乐地址，变量
    fu.appendChild(zi);
}