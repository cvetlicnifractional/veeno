function install(t){install.installed||(install.installed=!0,t.component("veeno",veeno))}import noUiSlider from"nouislider";var events=["start","slide","update","change","set","end"],veeno={name:"veeno",props:{inputClass:{type:String,default:"custom-slider-input"},inputName:{type:String,default:"custom-slider-value"},options:{type:Object,default:function(){return{start:[20,80],connect:!0,range:{min:0,max:100}}}},vertical:{type:Boolean,default:!1},handles:{type:[Number,Array],default:null},connect:{type:[Boolean,Array],default:!1},tooltips:{type:[Boolean,Array],default:!1},step:{type:Number,default:0},range:{type:Object,required:!0,validator:function(t){return!Array.isArray(t)&&"object"==typeof t}},pipsy:{type:[Boolean,Object],default:function(){return!1},validator:function(t){return"boolean"==typeof t||!Array.isArray(t)&&"object"==typeof t}},rtl:{type:Boolean,default:!1},set:{type:[Number,Array],default:null,validator:function(t){return"number"==typeof t||Array.isArray(t)}},behaviour:{type:String,default:"tap",validator:function(t){return["drag","tap","fixed","snap","none"].indexOf(-1!==t)}},getset:{type:Function,default:function(){return function(){return""}}}},created:function(){this.optionz=Object.assign({},this.options,this.$props,this.vertical&&(this.options.orientation="vertical"),this.handles&&(this.options.start=this.handles),this.rtl&&(this.options.direction="rtl"),this.pipsy&&!Object.keys(this.pipsy).length?this.options.pips={mode:"range",density:5}:this.options.pips=this.pipsy)},mounted:function(){var t=this,e=this.$el;"vertical"===this.options.orientation&&(e.style.height="100%"),noUiSlider.create(e,this.optionz),events.forEach(function(n){e.noUiSlider.on(n,function(e,i,o,s,a){t.$emit(n,{values:e,handle:i,unencoded:o,tap:s,positions:a}),"update"===n&&t.$emit("input",e[i])})}),this.getset(e)},render:function(t){var e=t("input",{attrs:{type:"hidden",name:this.name},class:this.inputClass}),n=t("span",spanOptions,this.$slots.default);return t("div",divOptions,[e,n])},data:function(){return{optionz:Object,latestHandleValue:null}},watch:{set:function(t){this.$el.noUiSlider.set(t)}}},divOptions={style:{position:"relative"},class:{veeno:!0},attrs:{name:"custom-slider"}},spanOptions={style:{position:"absolute",top:"-2.5rem"},class:{"veeno-span":!0}},plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);export default veeno;export{install};