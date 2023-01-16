"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30305],{30707:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-437f4445","path":"/devices/KMPCIL-tag-001.html","title":"KMPCIL KMPCIL-tag-001 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"KMPCIL KMPCIL-tag-001 control via MQTT","description":"Integrate your KMPCIL KMPCIL-tag-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:00:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":3,"title":"Additional notes","slug":"additional-notes","link":"#additional-notes","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Power_state (binary)","slug":"power-state-binary","link":"#power-state-binary","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1673894128000},"filePathRelative":"devices/KMPCIL-tag-001.md"}')},937320:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(166252);const n=(0,a._)("h1",{id:"kmpcil-kmpcil-tag-001",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#kmpcil-kmpcil-tag-001","aria-hidden":"true"},"#"),(0,a.Uk)(" KMPCIL KMPCIL-tag-001")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"KMPCIL-tag-001")],-1),d=(0,a._)("td",null,"Vendor",-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Arrival sensor")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, presence, power_state, occupancy, vibration, temperature, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/KMPCIL-tag-001.jpg",alt:"KMPCIL KMPCIL-tag-001"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><p>The Arrival Sensor will be in pairing mode when it is first powered up. You can force it to go back into pairing mode by factory resetting the sensor in the following steps.</p><p>1.remove all power (battery and dc) 2.press the button on the back of the board. 3.plug the dc power and count to 4 to 5 seconds (not more). 4.release the button. At this point, the module is in pairing mode.</p><p>Once the Arrival Sensor is in pairing mode, please follow the standard Zigbee2Mqtt pairing process for a new device.</p><h3 id="additional-notes" tabindex="-1"><a class="header-anchor" href="#additional-notes" aria-hidden="true">#</a> Additional notes</h3><p>Please visit https://community.home-assistant.io/t/zigbee-arrival-sensor-for-car/382529/7</p>',7),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>presence_timeout_dc</code>: Time in seconds after which presence is cleared after detecting it (default 60 seconds) while in DC. The value must be a number with a minimum value of <code>60</code></p></li><li><p><code>presence_timeout_battery</code>: Time in seconds after which presence is cleared after detecting it (default 420 seconds) while in Battery. The value must be a number with a minimum value of <code>120</code></p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="power-state-binary" tabindex="-1"><a class="header-anchor" href="#power-state-binary" aria-hidden="true">#</a> Power_state (binary)</h3><p>Value can be found in the published state on the <code>power_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> power_state is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),b={},m=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=KMPCIL"},{default:(0,a.w5)((()=>[(0,a.Uk)("KMPCIL")])),_:1})])]),l,c,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);