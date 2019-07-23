<template>
  <div class="aaa">
    <div>index</div>
    <input type="text" name="a" id="a" @click="openPicker" class="bbb"
     :value="chickTime" readonly placeholder="请选择日期"/>
    <mt-datetime-picker
      v-model="pickerValue"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
      :startDate="startDate"
    ></mt-datetime-picker>

    <div class="applyInput cb mt3">
       <textarea placeholder="请输入" maxlength="500" @input="descInput" v-model="desc" />
       <span class="numberV">{{txtVal}}/500</span>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../filters/formate'
export default {
  data() {
    return {
    pickerValue: "",
    chickTime:"",
    startDate: new Date(),
    desc: "",
    txtVal: 0
    };
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
	},
	handleConfirm(){
		if(this.pickerValue == ""){
      this.chickTime =  formatDate(new Date());
		}else{
      this.chickTime = formatDate(this.pickerValue);
    }
  },
  descInput(){
    this.txtVal = this.desc.length;
  }
  },
};
</script>

<style scoped lang="scss">
.aaa {
  background-color: #4d4d4d;
  padding-bottom: 15%;
}
.bbb {
  height: 100px;
  width: 100%;
}
</style>
