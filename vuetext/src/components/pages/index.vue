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
