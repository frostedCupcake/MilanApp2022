import React, { Component } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


class App extends Component {
  componentDidMount() {
  
    let allData = {
      "0":{
        "A": 100,
        "B": 90,
        "C": 10,
        "D": 5,
        "E": 8,
        "F": 30,
        "G":40,
        "H": 60,
        "I":0,
        "J":0,
        "R": 30,
        "K":80
       },
        "1":{
         "A": 20,
         "B": 15,
         "C": 20,
         "D": 20,
         "E": 20,
         "F": 15,
         "G": 15,
         "H": 15,
         "I": 15,
         "J": 15,
         "R": 15,
         "K": 15
        },
        "2":{
         "A": 40,
         "B": 20,
         "C": 34,
         "D": 20,
         "E": 30,
         "F": 20,
         "G": 20,
         "H": 20,
         "I": 20,
         "J": 20,
         "R": 20,
         "K": 20
        },
        "3":{
         "A": 45,
         "B": 20,
         "C": 34,
         "D": 40,
         "E": 45,
         "F": 20,
         "G": 20,
         "H": 20,
         "I": 25,
         "J": 34,
         "R": 20,
         "K": 20
        },
        "4":{
         "A": 60,
         "B": 40,
         "C": 35,
         "D": 40,
         "E": 55,
         "F": 50,
         "G": 50,
         "H": 50,
         "I": 50,
         "J": 50,
         "R": 34,
         "K": 22
        },
        "5":{
         "A": 70,
         "B": 90,
         "C": 36,
         "D": 60,
         "E": 79,
         "F": 120,
         "G": 68,
         "H": 75,
         "I": 68,
         "J": 88,
         "R": 67,
         "K": 70
        },
       "6": {
         "A": 90,
         "B": 100,
         "C": 80,
         "D": 80,
         "E": 80,
         "F": 121,
         "G": 98,
         "H": 89,
         "I": 70,
         "J": 98,
         "R": 94,
         "K": 98
        },
        "7":{
         "A": 100,
         "B": 108,
         "C": 105,
         "D": 90,
         "E": 90,
         "F": 126,
         "G": 105,
         "H": 105,
         "I": 88,
         "J": 108,
         "R": 105,
         "K": 102
        },
       "8": {
         "A": 101,
         "B": 111,
         "C": 135,
         "D": 100,
         "E": 100,
         "F": 127,
         "G": 120,
         "H": 120,
         "I": 90,
         "J": 110,
         "R": 130,
         "K": 120
        },
       "9": {
         "A": 102,
         "B": 115,
         "C": 150,
         "D": 120,
         "E": 107,
         "F": 130,
         "G": 129,
         "H": 122,
         "I": 99,
         "J": 113,
         "R": 134,
         "K": 123
        }
       
    };
    
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdiv");
    
    root.numberFormatter.setAll({
      numberFormat: "#a",
    
      // Group only into M (millions), and B (billions)
      bigNumberPrefixes: [
        { number: 1e6, suffix: "M" },
        { number: 1e9, suffix: "B" }
      ],
    
      // Do not use small number prefixes at all
      smallNumberPrefixes: []
    });
    
    let stepDuration = 2000;
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "panY",
      layout:root.verticalLayout
    }));
    
    
    // We don't want zoom-out button to appear while animating, so we hide it at all
    chart.zoomOutButton.set("forceHidden", false);
      
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 20,
      inversed: true,
      strokeOpacity: 1,
      strokeWidth: 2,
      
    });
    
    // hide grid
    yRenderer.grid.template.set("visible",false);
    
    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer,
      cellStartLocation: 0.1,
      cellEndLocation: 1
            
    }));
  
    
    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 1,
      strictMinMax: true,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {   minGridDistance: 40,cellStartLocation: 0,
        cellEndLocation: 1}),
    }));
    
    
    
    xAxis.set("interpolationDuration", stepDuration / 10);
    xAxis.set("interpolationEasing", am5.ease.linear);

      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network",
    })
    );
    series.columns.template.setAll({
      strokeOpacity: 0,
      shadowColor: am5.color(0x000000),
      shadowBlur: 8,
     
    });
  
    // Rounded corners for columns
    series.columns.template.setAll({ cornerRadiusBR: 0, cornerRadiusTR: 0 });
    
    // Make each column to be of a different color
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    chart.maskBullets = false;

    // Add label bullet
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Label.new(root, {
          text: "{valueXWorking.formatNumber('#.# a')}",
          fill: root.interfaceColors.get("alternativeText"),
          centerX: am5.p100,
          centerY: am5.p50,
          populateText: true,
        })  
        
      });
    });
    
    series.bullets.push(function() {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Picture.new(root, {
        width: 24,
        height: 24,
        centerY: am5.p50,
        centerX: am5.p50,
          src:"{d.icon}"
        })
      });
    });

    
    let label = chart.plotContainer.children.push(am5.Label.new(root, {
      fontSize: "4em",
      opacity: 0.5,
      x: am5.p100,
      y: am5.p100,
      centerY: am5.p100,
      centerX: am5.p100,
      
    }));
    
    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }chart.children.unshift(am5.Label.new(root, {
      text: "Milan Race",
      fontSize: 25,
      fontWeight: "500",
      textAlign: "center",
      x: am5.percent(50),
      centerX: am5.percent(50),
      paddingTop: 0,
      paddingBottom: 0
    }));
    
    // Axis sorting
    function sortCategoryAxis() {
      // sort by value
      series.dataItems.sort(function (x, y) {
        return y.get("valueX") - x.get("valueX"); // descending
        //return x.get("valueX") - y.get("valueX"); // ascending
      });
    
      // go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        let seriesDataItem = getSeriesItem(dataItem.get("category"));
    
        if (seriesDataItem) {
          // get index of series data item
          let index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          let deltaPosition =
            (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          if (dataItem.get("index") != index) {
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: stepDuration / 2,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
      });
      // sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set, they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }
    
    let year =0;
    
    // update data with values each 1.5 sec
    let interval = setInterval(function () {
      year++;
    
      if (year > 9) {
        clearInterval(interval);
        clearInterval(sortInterval);
      }
      updateData();
    }, stepDuration);
    
    let sortInterval = setInterval(function () {
      sortCategoryAxis();
    }, 100);
    
    function setInitialData() {
      let d = allData[year];
    
      for (var n in d) {
        series.data.push({ network: n, value: d[n] });
        yAxis.data.push({ network: n });
      }
    }
    
    function updateData() {
      let itemsWithNonZero = 0;
    
      if (allData[year]) {
        label.set("text","Sept "+ year.toString());
    
        am5.array.each(series.dataItems, function (dataItem) {
          let category = dataItem.get("categoryY");
          let value = allData[year][category];
    
          if (value > 0) {
            itemsWithNonZero++;
          }
    
          dataItem.animate({
            key: "valueX",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
          dataItem.animate({
            key: "valueXWorking",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
        });
    
        yAxis.zoom(0, itemsWithNonZero / yAxis.dataItems.length);
      }
    }
    
    setInitialData();
    setTimeout(function () {
      year++;
      updateData();
    }, 50);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    this.root=root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <div className='canvas-container'>
      <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
      </div>
    );
  }
}

export default App;