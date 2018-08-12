 
 
基于openlayers的地图js库的热力图使用方法：
import HeatMap from './heatMap/HeatMap'
<HeatMap options={options}/>

 /**
     * 接受的参数
     */ 

let options={
  target:"heatMap",                                          //地图挂载Dom节点的id
  center:[114.056674,22.659576],                             //地图当前视图的中心坐标
  zoom:5,                           
  data:[
         {coordinate:[114.056674,22.659576],count:1},      //坐标点coordinate，count个数
         {coordinate:[114.058423,22.658032],count:2},
         {coordinate:[114.058422,22.658032],count:3},
         {coordinate:[114.058421,22.650032],count:3},
         {coordinate:[114.058422,22.650032],count:2},
         {coordinate:[114.05322,22.658032],count:1},
         {coordinate:[114.057422,22.652032],count:1},
         {coordinate:[114.068422,22.658032],count:2},
         {coordinate:[114.078422,22.653032],count:3},
         {coordinate:[114.088422,22.658032],count:4},
         {coordinate:[114.098422,22.655032],count:5}
      ]                                   
} 
