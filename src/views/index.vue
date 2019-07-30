<template>
  <div class="search_main">
    <div class="nav">
      <div>
        <ul class="logo">
          <li>
            <span class="iconfont iconlogo"></span>
          </li>
        </ul>
        <div class="search_head">
          <el-input placeholder="请输入内容" v-model="input" class="input_with_select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="文献" value="1"></el-option>
              <el-option label="作者" value="2"></el-option>
              <el-option label="机构" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <ul class="user">
          <li>
            <a href="#">
              <span class="iconfont iconyonghu"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="iconfont icontuichu"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="search_main_content">
      <div class="left">
        <span>时间</span>
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <!-- 左侧信息详情模块 -->
        <div>
          <span>主题</span>
          <ul class="module_label">
            <li>
              <el-checkbox v-model="checked1"></el-checkbox>
              <div class="details">
                <div>
                  <span>作者</span>
                  <span>4.8万</span>
                </div>
                <el-progress :percentage="50" :show-text="false"></el-progress>
              </div>
            </li>
            <li>
              <el-checkbox v-model="checked2"></el-checkbox>
              <div class="details">
                <div>
                  <span>作者</span>
                  <span>4.8万</span>
                </div>
                <el-progress :percentage="50" :show-text="false"></el-progress>
              </div>
            </li>
            <li>
              <el-checkbox v-model="checked3"></el-checkbox>
              <div class="details">
                <div>
                  <span>作者</span>
                  <span>4.8万</span>
                </div>
                <el-progress :percentage="50" :show-text="false"></el-progress>
              </div>
            </li>
            <li>
              <el-checkbox v-model="checked4"></el-checkbox>
              <div class="details">
                <div>
                  <span>作者</span>
                  <span>4.8万</span>
                </div>
                <el-progress :percentage="50" :show-text="false"></el-progress>
              </div>
            </li>
            <li>
              <el-button type="info">加载更多</el-button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 中间详情 -->
      <div class="center">
        <div class="title">
          <span>共10000条相关结果</span>
          <el-select v-model="valueselect" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-card class="box-card">
          <div class="card_title">
            <h2>文章标题</h2>
            <span>原文下载</span>
          </div>
          <ul class="writer">
            <li v-for="(item,i) in writerlist" :key="i">{{item}}</li>
          </ul>
          <ul class="mechanism">
            <li v-for="(item,i) in mechanismlist" :key="i">{{item}}</li>
          </ul>
          <ul class="mechanism">
            <li v-for="(item,i) in keywordlist" :key="i">
              <el-tag type="info">{{item}}</el-tag>
            </li>
          </ul>
          <div class="article">
            <p>{{articlcontent}}</p>
          </div>
          <div class="card_bottom">
            <div>
              <span>年份：</span>
              <span>2019</span>
              <span style="margin-left:20px;">被引用量：</span>
              <span>2020</span>
            </div>
            <div>出版物文本</div>
          </div>
        </el-card>
      </div>
      <div class="right">
        <span>热门话题</span>
        <div class="righr_word">
          <el-tag type="info">关键字</el-tag>
          <el-tag type="info">关键字</el-tag>
          <el-tag type="info">关键字</el-tag>
          <el-tag type="info">关键字</el-tag>
          <el-tag type="info">关键字</el-tag>
        </div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>老王</span>
            <span style="float: right;">机构</span>
            <div>作者简介</div>
          </div>
          <div>主题内容</div>
          <div>出版物名称</div>
        </el-card>
      </div>
    </div>
    <div class="footer">
      <span>版本号：</span>
      <span>1.0.1</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: "文献",
      value1: "",
      value2: "",
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: false,
      writerlist: ["张三", "李四", "王五"],
      mechanismlist: ["甲", "乙", "丙", "丁"],
      keywordlist: ["关键字啊", "关键字"],
      articlcontent:
        "Abstract 2273: Serum choline, methionine, betaine, dimethylglycine, and trimethylamine-N-oxide in relation to pancreatic cancer risk in two nested case-control studies in Asian populations",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      valueselect: ""
    };
  },
  methods: {}
};
</script>
<style lang="less">
.search_main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav {
  width: 100%;
  height: 60px;
  background-color: #007398;
}
.nav .iconfont {
  font-size: 20px;
  color: #fff;
}
.nav > div {
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 0 auto;
  line-height: 60px;
}

.search_head {
  width: 800px;
  .el-select .el-input {
    width: 100px;
    color: #007398;
  }
  .input_with_select .el-input-group__prepend {
    background-color: #fff;
    border: none;
  }
  .el-input-group--append .el-input__inner,
  .el-input-group__prepend,
  .el-input-group--prepend .el-input__inner,
  .el-input-group__append {
    border-radius: 0px;
  }
  .el-input__inner {
    border: none;
  }
  .el-input-group__append {
    background-color: #fff;
    i {
      font-size: 20px;
      color: #017398;
    }
  }
}
.nav ul {
  display: flex;
}
.user {
  li {
    margin-left: 15px;
  }
}
.search_main_content {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .left,
  .center,
  .right {
    height: 100%;
  }
}
.footer {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e7e7e7;
}

// 模块
//左侧信息详情模块
.module_label {
  li {
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    .details {
      width: 100%;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
    .el-button {
      width: 100%;
    }
  }
}
.el-progress-bar__inner {
  background-color: #007398 !important;
}
// 中间部分
.center {
  width: 800px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  h2 {
    margin: 0;
    font-size: 20px;
  }
}
.writer,
.mechanism {
  display: flex;
}
.writer li,
.mechanism li {
  margin-right: 10px;
  color: #666;
}
.card_bottom {
  display: flex;
  justify-content: space-between;
}

// 右侧部分
.right {
  .righr_word {
    display: flex;
    flex-wrap: wrap;
    .el-tag {
      margin-right: 10px;
    }
  }
  .el-card__header,
  .el-card__body {
    padding: 10px;
    div{
      color: #939393;
      font-size: 14px;
    }
  }
}
</style>

