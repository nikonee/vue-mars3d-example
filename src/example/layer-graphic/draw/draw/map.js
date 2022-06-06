import * as mars3d from "mars3d"
// import kgUtil from "kml-geojson"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象

export const mapOptions = {
  // scene: {
  //   center: { lat: 30.846849, lng: 116.335307, alt: 739, heading: 360, pitch: -45 }
  // },
  control: {
    infoBox: false
  }
}

export const eventTarget = new mars3d.BaseClass()

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  graphicLayer = new mars3d.layer.GraphicLayer({
    hasEdit: true,
    isAutoEditing: true // 绘制完成后是否自动激活编辑
  })
  map.addLayer(graphicLayer)

  bindLayerEvent()
  bindLayerContextMenu() // 在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效

  loadDemoData()

  // 自定义提示
  // mars3d.Lang["_单击开始绘制"][0] = "新的提示内容";
  // mars3d.Lang["_单击增加点右击删除点"][0] = "新的提示内容";
  // mars3d.Lang["_双击完成绘制"][0] = "";
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

export function drawPoint() {
  graphicLayer.startDraw({
    type: "point",
    style: {
      pixelSize: 12,
      color: "#3388ff",
      label: {
        // 不需要文字时，去掉label配置即可
        text: "可以同时支持文字",
        font_size: 20,
        color: "#ffffff",
        outline: true,
        outlineColor: "#000000",
        pixelOffsetY: -20
      }
    }
  })
}

export function drawMarker() {
  graphicLayer.startDraw({
    type: "billboard",
    style: {
      image: "img/marker/mark1.png",
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      label: {
        // 不需要文字时，去掉label配置即可
        text: "可以同时支持文字",
        font_size: 26,
        color: "#ffffff",
        outline: true,
        outlineColor: "#000000",
        pixelOffsetY: -60
      }
    }
  })
}

export function drawLabel() {
  graphicLayer.startDraw({
    type: "label",
    style: {
      text: "火星科技三维地球",
      color: "#0081c2",
      font_size: 50,
      outline: true,
      outlineColor: "#ffffff",
      outlineWidth: 2
    }
  })
}

export function startDrawModel() {
  graphicLayer.startDraw({
    type: "model",
    style: {
      scale: 10,
      url: "//data.mars3d.cn/gltf/mars/firedrill/xiaofangche.gltf"
    }
  })
}

export function drawPolyline(clampToGround) {
  graphicLayer.startDraw({
    type: "polyline",
    // maxPointNum: 2,  //限定最大点数，可以绘制2个点的线，自动结束
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      width: 3,
      clampToGround: clampToGround
    }
  })
}

export function drawPolygon(clampToGround) {
  graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      opacity: 0.5,
      outline: true,
      outlineColor: "#ffffff",
      outlineWidth: 2.0,
      clampToGround: clampToGround
    }
  })
}

export function drawCurve(clampToGround) {
  graphicLayer.startDraw({
    type: "curve",
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      width: 3,
      clampToGround: clampToGround
    }
  })
}

export function drawCorridor(clampToGround) {
  graphicLayer.startDraw({
    type: "corridor",
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      opacity: 0.6,
      width: 500,
      clampToGround: clampToGround
    }
  })
}

export function drawEllipse(clampToGround) {
  graphicLayer.startDraw({
    type: "circle",
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      opacity: 0.6,
      outline: true,
      outlineColor: "#ffffff",
      outlineWidth: 2.0,
      clampToGround: clampToGround
    }
  })
}

export function drawRectangle(clampToGround) {
  graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: clampToGround ? "#ffff00" : "#3388ff",
      opacity: 0.6,
      outline: true,
      outlineColor: "#ffffff",
      outlineWidth: 2.0,
      clampToGround: clampToGround
    }
  })
}

export function draPlane() {
  graphicLayer.startDraw({
    type: "plane",
    style: {
      color: "#00ff00",
      opacity: 0.8,
      plane_normal: "x",
      dimensions_x: 1000.0,
      dimensions_y: 1000.0
    }
  })
}

export function draWall(closure) {
  graphicLayer.startDraw({
    type: "wall",
    style: {
      color: "#00ff00",
      opacity: 0.8,
      diffHeight: 400,
      closure: closure // 是否闭合
    }
  })
}

export function drawBox() {
  graphicLayer.startDraw({
    type: "box",
    style: {
      color: "#00ff00",
      opacity: 0.6,
      dimensions_x: 1000.0,
      dimensions_y: 1000.0,
      dimensions_z: 1000.0
    }
  })
}

export function drawCylinder() {
  graphicLayer.startDraw({
    type: "cylinder",
    style: {
      fill: true,
      color: "#00ff00",
      opacity: 0.6,
      length: 1000
    }
  })
}

export function drawEllipsoid() {
  graphicLayer.startDraw({
    type: "ellipsoid",
    style: {
      fill: true,
      color: "#00ff00",
      opacity: 0.6
    }
  })
}

export function drawExtrudedPolygon() {
  graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: "#00ff00",
      opacity: 0.6,
      diffHeight: 300
    }
  })
}

export function drawExtrudedRectangle() {
  graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: "#00ff00",
      opacity: 0.6,
      diffHeight: 300
    }
  })
}

export function drawExtrudedCircle() {
  graphicLayer.startDraw({
    type: "circle",
    style: {
      color: "#00ff00",
      opacity: 0.6,
      diffHeight: 300
    }
  })
}

// 在图层级处理一些事物
function bindLayerEvent() {
  // 在layer上绑定监听事件
  // graphicLayer.on(mars3d.EventType.click, function (event) {
  //   console.log("监听layer，单击了矢量对象", event)
  // })
  /* graphicLayer.on(mars3d.EventType.mouseOver, function (event) {
      console.log("监听layer，鼠标移入了矢量对象", event)
    })
    graphicLayer.on(mars3d.EventType.mouseOut, function (event) {
      console.log("监听layer，鼠标移出了矢量对象", event)
    }) */

  // 数据编辑相关事件， 用于属性弹窗的交互
  // graphicLayer.on(mars3d.EventType.drawCreated, function (e) {
  //   eventTarget.fire("graphicEditor-start", e)
  // })
  graphicLayer.on(
    [mars3d.EventType.editStart, mars3d.EventType.editMovePoint, mars3d.EventType.editStyle, mars3d.EventType.editRemovePoint],
    function (e) {
      eventTarget.fire("graphicEditor-update", e)
    }
  )
  graphicLayer.on([mars3d.EventType.editStop, mars3d.EventType.removeGraphic], function (e) {
    eventTarget.fire("graphicEditor-stop", e)
  })
}

// 在图层绑定Popup弹窗
export function bindLayerPopup() {
  graphicLayer.bindPopup(function (event) {
    const attr = event.graphic.attr || {}
    attr["类型"] = event.graphic.type
    attr["来源"] = "我是layer上绑定的Popup"
    attr["备注"] = "我支持鼠标交互"

    return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })
  })
}

export function bindLayerContextMenu() {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.startEditing) {
          return false
        }
        return !graphic.isEditing
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.startEditing(graphic)
        }
      }
    },
    {
      text: "停止编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return graphic.isEditing
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.stopEditing(graphic)
        }
      }
    },
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        const parent = graphic._parent // 右击是编辑点时
        graphicLayer.removeGraphic(graphic)
        if (parent) {
          graphicLayer.removeGraphic(parent)
        }
      }
    },
    {
      text: "计算长度",
      icon: "fa fa-medium",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "polyline" ||
          graphic.type === "polylineP" ||
          graphic.type === "curve" ||
          graphic.type === "curveP" ||
          graphic.type === "polylineVolume" ||
          graphic.type === "polylineVolumeP" ||
          graphic.type === "corridor" ||
          graphic.type === "corridorP" ||
          graphic.type === "wall" ||
          graphic.type === "wallP"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        globalAlert("该对象的长度为:" + strDis)
      }
    },
    {
      text: "计算周长",
      icon: "fa fa-medium",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        globalAlert("该对象的周长为:" + strDis)
      }
    },
    {
      text: "计算面积",
      icon: "fa fa-reorder",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP" ||
          graphic.type === "scrollWall" ||
          graphic.type === "water"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strArea = mars3d.MeasureUtil.formatArea(graphic.area)
        globalAlert("该对象的面积为:" + strArea)
      }
    }
  ])
}

/**
 * 设置是否仅在模型上标绘
 * @param {Boolean} value 是否仅在模型上标绘
 * @returns {void}
 */
export function updateOnlyPickModelPosition(value) {
  map.onlyPickModelPosition = value
}

/**
 * 打开geojson文件
 *
 * @export
 * @param {FileInfo} file 文件
 * @returns {void} 无
 */
export function openGeoJSON(file) {
  const fileName = file.name
  const fileType = fileName?.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase()

  if (fileType === "json" || fileType === "geojson") {
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onloadend = function (e) {
      let geojson = this.result
      geojson = simplifyGeoJSON(geojson) // 简化geojson的点
      graphicLayer.loadGeoJSON(geojson, {
        flyTo: true
      })
    }
  } else if (fileType === "kml") {
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onloadend = function (e) {
      const strkml = this.result
      kgUtil.toGeoJSON(strkml).then((geojson) => {
        geojson = simplifyGeoJSON(geojson) // 简化geojson的点
        console.log("kml2geojson", geojson)

        graphicLayer.loadGeoJSON(geojson, {
          flyTo: true
        })
      })
    }
  } else if (fileType === "kmz") {
    // 加载input文件控件的二进制流
    kgUtil.toGeoJSON(file).then((geojson) => {
      geojson = simplifyGeoJSON(geojson) // 简化geojson的点
      console.log("kmz2geojson", geojson)

      graphicLayer.loadGeoJSON(geojson, {
        flyTo: true
      })
    })
  } else {
    globalMsg("暂不支持 " + fileType + " 文件类型的数据！")
  }
}

// 简化geojson的坐标
function simplifyGeoJSON(geojson) {
  try {
    geojson = turf.simplify(geojson, { tolerance: 0.000001, highQuality: true, mutate: true })
  } catch (e) {
    //
  }
  return geojson
}

// 点击保存GeoJSON
export function saveGeoJSON() {
  if (graphicLayer.length === 0) {
    globalMsg("当前没有标注任何数据，无需保存！")
    return
  }
  const geojson = graphicLayer.toGeoJSON()
  mars3d.Util.downloadFile("我的标注.json", JSON.stringify(geojson))
}

// 点击保存KML
export function saveKML() {
  if (graphicLayer.length === 0) {
    globalMsg("当前没有标注任何数据，无需保存！")
    return
  }
  let geojsonObject = graphicLayer.toGeoJSON()
  if (geojsonObject == null) {
    return null
  }

  geojsonObject = JSON.parse(JSON.stringify(geojsonObject))

  const kml = kgUtil.toKml(geojsonObject, {
    name: "Mars3D标绘数据",
    documentName: "Mars3D标绘数据文件",
    documentDescription: "标绘数据 by mars3d.cn",
    simplestyle: true
  })

  mars3d.Util.downloadFile("我的标注.kml", kml)
}

// 点击保存WKT
export function saveWKT() {
  if (graphicLayer.length === 0) {
    globalMsg("当前没有标注任何数据，无需保存！")
    return
  }
  let geojsonObject = graphicLayer.toGeoJSON()
  if (geojsonObject == null) {
    return null
  }
  geojsonObject = JSON.parse(JSON.stringify(geojsonObject))

  const arrWKT = []
  let index = 0
  geojsonObject.features.forEach((feature) => {
    const attr = feature.properties
    const style = feature.properties.style

    const wkt = Terraformer.WKT.convert(feature.geometry) // geojson转换WKT格式 ,terraformer库
    arrWKT.push({
      id: ++index,
      name: attr.name || "",
      remark: attr.remark || "",
      style: style,
      wkt: wkt
    })
  })
  mars3d.Util.downloadFile("我的标注wkt.txt", JSON.stringify(arrWKT))
}

// 加载演示数据
function loadDemoData() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return
  }

  mars3d.Util.fetchJson({ url: "//data.mars3d.cn/file/geojson/mars3d-draw.json" }).then(function (json) {
    graphicLayer.loadGeoJSON(json, { clear: true, flyTo: true })
  })
}
