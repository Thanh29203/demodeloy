import './polyfills.server.mjs';
import{$ as _,A as V,Aa as l2,B as i4,Ba as C4,C as q2,Ca as g4,D as j2,Da as L4,E as n2,Ea as z1,F as Q,Fa as x4,G as r3,Ga as b4,H as o2,Ha as f3,I as C,Ia as V1,J as $2,Ja as M1,K as v1,Ka as m3,L as K,La as y4,M as f,N as v,O as M,Oa as N4,P as s3,Q as t3,R as g2,S as r4,Sa as S4,T as s4,U as k,Ua as w4,V as D,Va as C1,W as t4,Wa as A4,X as n4,Y as o4,Z as d,_ as X2,a as i2,aa as l4,b as Z3,ba as f4,c as J3,ca as m4,d as c4,da as p1,e as h1,ea as x,f as u1,fa as d1,g as j,ga as n3,h as H2,ha as h4,i as r2,j as s2,ja as u4,k as z2,ka as H1,l as U2,m as L,n as V2,o as U,oa as v4,p as a4,q as t2,qa as p4,r as M2,ra as d4,s as C2,sa as o3,t as i3,ta as l3,u as G2,v as N2,va as H4,w as Y,wa as Y2,x as e4,xa as z4,y as W2,ya as V4,z as H,za as M4}from"./chunk-MN5JZG2J.mjs";import{a as S,b as O}from"./chunk-VVCT4QZE.mjs";var B4=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(V(q2),V(N2))},c.\u0275dir=U({type:c});let a=c;return a})(),x0=(()=>{let c=class c extends B4{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=i3(c)))(s||c)}})(),c.\u0275dir=U({type:c,features:[n2]});let a=c;return a})(),I4=new r2("");var b0={provide:I4,useExisting:u1(()=>A2),multi:!0};function y0(){let a=o3()?o3().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var N0=new r2(""),A2=(()=>{let c=class c extends B4{constructor(e,r,s){super(e,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!y0())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(V(q2),V(N2),V(N0,8))},c.\u0275dir=U({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&k("input",function(n){return s._handleInput(n.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(n){return s._compositionEnd(n.target.value)})},features:[p1([b0]),n2]});let a=c;return a})();var R4=new r2(""),O4=new r2("");function U4(a){return a!=null}function G4(a){return u4(a)?Z3(a):a}function W4(a){let c={};return a.forEach(i=>{c=i!=null?S(S({},c),i):c}),Object.keys(c).length===0?null:c}function q4(a,c){return c.map(i=>i(a))}function S0(a){return!a.validate}function j4(a){return a.map(c=>S0(c)?c:i=>c.validate(i))}function w0(a){if(!a)return null;let c=a.filter(U4);return c.length==0?null:function(i){return W4(q4(i,c))}}function u3(a){return a!=null?w0(j4(a)):null}function A0(a){if(!a)return null;let c=a.filter(U4);return c.length==0?null:function(i){let e=q4(i,c).map(G4);return c4(e).pipe(J3(W4))}}function v3(a){return a!=null?A0(j4(a)):null}function k4(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function k0(a){return a._rawValidators}function D0(a){return a._rawAsyncValidators}function h3(a){return a?Array.isArray(a)?a:[a]:[]}function L1(a,c){return Array.isArray(a)?a.includes(c):a===c}function D4(a,c){let i=h3(c);return h3(a).forEach(r=>{L1(i,r)||i.push(r)}),i}function T4(a,c){return h3(c).filter(i=>!L1(a,i))}var x1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=u3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=v3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},w2=class extends x1{get formDirective(){return null}get path(){return null}},J2=class extends x1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},b1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},T0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},S7=O(S({},T0),{"[class.ng-submitted]":"isSubmitted"}),S1=(()=>{let c=class c extends b1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(V(J2,2))},c.\u0275dir=U({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&v1("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[n2]});let a=c;return a})(),$4=(()=>{let c=class c extends b1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(V(w2,10))},c.\u0275dir=U({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&v1("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[n2]});let a=c;return a})();var Q2="VALID",g1="INVALID",S2="PENDING",K2="DISABLED";function X4(a){return(w1(a)?a.validators:a)||null}function _0(a){return Array.isArray(a)?u3(a):a||null}function Y4(a,c){return(w1(c)?c.asyncValidators:a)||null}function F0(a){return Array.isArray(a)?v3(a):a||null}function w1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function P0(a,c,i){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new h1(1e3,"");if(!e[i])throw new h1(1001,"")}function E0(a,c,i){a._forEachChild((e,r)=>{if(i[r]===void 0)throw new h1(1002,"")})}var y1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===Q2}get invalid(){return this.status===g1}get pending(){return this.status==S2}get disabled(){return this.status===K2}get enabled(){return this.status!==K2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(D4(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(D4(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(T4(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(T4(c,this._rawAsyncValidators))}hasValidator(c){return L1(this._rawValidators,c)}hasAsyncValidator(c){return L1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=S2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=K2,this.errors=null,this._forEachChild(e=>{e.disable(O(S({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(O(S({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Q2,this._forEachChild(e=>{e.enable(O(S({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(O(S({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Q2||this.status===S2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?K2:Q2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=S2,this._hasOwnPendingAsyncValidator=!0;let i=G4(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new Y,this.statusChanges=new Y}_calculateStatus(){return this._allControlsDisabled()?K2:this.errors?g1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S2)?S2:this._anyControlsHaveStatus(g1)?g1:Q2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){w1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=_0(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=F0(this._rawAsyncValidators)}},N1=class extends y1{constructor(c,i,e){super(X4(i),Y4(e,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,e={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){E0(this,!0,c),Object.keys(c).forEach(e=>{P0(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(e=>{let r=this.controls[e];r&&r.patchValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((e,r)=>{e.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,e)=>(c[e]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,e)=>e._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let e=this.controls[i];e&&c(e,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,e]of Object.entries(this.controls))if(this.contains(i)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,e,r)=>((e.enabled||this.disabled)&&(i[r]=e.value),i))}_reduceChildren(c,i){let e=c;return this._forEachChild((r,s)=>{e=i(e,r,s)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var p3=new r2("CallSetDisabledState",{providedIn:"root",factory:()=>d3}),d3="always";function B0(a,c){return[...c.path,a]}function Q4(a,c,i=d3){K4(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),R0(a,c),U0(a,c),O0(a,c),I0(a,c)}function _4(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function I0(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function K4(a,c){let i=k0(a);c.validator!==null?a.setValidators(k4(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=D0(a);c.asyncValidator!==null?a.setAsyncValidators(k4(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();_4(c._rawValidators,r),_4(c._rawAsyncValidators,r)}function R0(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&Z4(a,c)})}function O0(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&Z4(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function Z4(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function U0(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function G0(a,c){a==null,K4(a,c)}function W0(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function q0(a){return Object.getPrototypeOf(a.constructor)===x0}function j0(a,c){a._syncPendingControls(),c.forEach(i=>{let e=i.control;e.updateOn==="submit"&&e._pendingChange&&(i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function $0(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(s=>{s.constructor===A2?i=s:q0(s)?e=s:r=s}),r||e||i||null}var X0={provide:w2,useExisting:u1(()=>H3)},Z2=Promise.resolve(),H3=(()=>{let c=class c extends w2{constructor(e,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new Y,this.form=new N1({},u3(e),v3(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Z2.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),Q4(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Z2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Z2.then(()=>{let r=this._findContainer(e.path),s=new N1({});G0(s,e),r.registerControl(e.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Z2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){Z2.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,j0(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}};c.\u0275fac=function(r){return new(r||c)(V(R4,10),V(O4,10),V(p3,8))},c.\u0275dir=U({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&k("submit",function(n){return s.onSubmit(n)})("reset",function(){return s.onReset()})},inputs:{options:[U2.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[p1([X0]),n2]});let a=c;return a})();function F4(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function P4(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var Y0=class extends y1{constructor(c=null,i,e){super(X4(i),Y4(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),w1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(P4(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){F4(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){F4(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){P4(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var Q0={provide:J2,useExisting:u1(()=>c1)},E4=Promise.resolve(),c1=(()=>{let c=class c extends J2{constructor(e,r,s,t,n,o){super(),this._changeDetectorRef=n,this.callSetDisabledState=o,this.control=new Y0,this._registered=!1,this.name="",this.update=new Y,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=$0(this,t)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),W0(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Q4(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){E4.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,s=r!==0&&p4(r);E4.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?B0(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(V(w2,9),V(R4,10),V(O4,10),V(I4,10),V(v4,8),V(p3,8))},c.\u0275dir=U({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[U2.None,"disabled","isDisabled"],model:[U2.None,"ngModel","model"],options:[U2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[p1([Q0]),n2,t2]});let a=c;return a})(),J4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=U({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var K0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=H2({});let a=c;return a})();var k2=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:p3,useValue:e.callSetDisabledState??d3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=H2({imports:[K0]});let a=c;return a})();function a6(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function h(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?a6(Object(i),!0).forEach(function(e){w(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):a6(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function O1(a){"@babel/helpers - typeof";return O1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},O1(a)}function Z0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function e6(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function J0(a,c,i){return c&&e6(a.prototype,c),i&&e6(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function w(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function T3(a,c){return a8(a)||i8(a,c)||N6(a,c)||s8()}function l1(a){return c8(a)||e8(a)||N6(a)||r8()}function c8(a){if(Array.isArray(a))return g3(a)}function a8(a){if(Array.isArray(a))return a}function e8(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function i8(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,t,n;try{for(i=i.call(a);!(r=(t=i.next()).done)&&(e.push(t.value),!(c&&e.length===c));r=!0);}catch(o){s=!0,n=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw n}}return e}}function N6(a,c){if(a){if(typeof a=="string")return g3(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g3(a,c)}}function g3(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function r8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i6=function(){},_3={},S6={},w6=null,A6={mark:i6,measure:i6};try{typeof window<"u"&&(_3=window),typeof document<"u"&&(S6=document),typeof MutationObserver<"u"&&(w6=MutationObserver),typeof performance<"u"&&(A6=performance)}catch{}var t8=_3.navigator||{},r6=t8.userAgent,s6=r6===void 0?"":r6,m2=_3,y=S6,t6=w6,A1=A6,k7=!!m2.document,a2=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",k6=~s6.indexOf("MSIE")||~s6.indexOf("Trident/"),k1,D1,T1,_1,F1,Z="___FONT_AWESOME___",L3=16,D6="fa",T6="svg-inline--fa",b2="data-fa-i2svg",x3="data-fa-pseudo-element",n8="data-fa-pseudo-element-pending",F3="data-prefix",P3="data-icon",n6="fontawesome-i2svg",o8="async",l8=["HTML","HEAD","STYLE","SCRIPT"],_6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),b="classic",N="sharp",E3=[b,N];function f1(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[b]}})}var r1=f1((k1={},w(k1,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),w(k1,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),k1)),s1=f1((D1={},w(D1,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(D1,N,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),D1)),t1=f1((T1={},w(T1,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(T1,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),T1)),f8=f1((_1={},w(_1,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(_1,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_1)),m8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,F6="fa-layers-text",h8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u8=f1((F1={},w(F1,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(F1,N,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),F1)),P6=[1,2,3,4,5,6,7,8,9,10],v8=P6.concat([11,12,13,14,15,16,17,18,19,20]),p8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n1=new Set;Object.keys(s1[b]).map(n1.add.bind(n1));Object.keys(s1[N]).map(n1.add.bind(n1));var d8=[].concat(E3,l1(n1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L2.GROUP,L2.SWAP_OPACITY,L2.PRIMARY,L2.SECONDARY]).concat(P6.map(function(a){return"".concat(a,"x")})).concat(v8.map(function(a){return"w-".concat(a)})),e1=m2.FontAwesomeConfig||{};function H8(a){var c=y.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function z8(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}y&&typeof y.querySelector=="function"&&(o6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],o6.forEach(function(a){var c=T3(a,2),i=c[0],e=c[1],r=z8(H8(i));r!=null&&(e1[e]=r)}));var o6,E6={styleDefault:"solid",familyDefault:"classic",cssPrefix:D6,replacementClass:T6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};e1.familyPrefix&&(e1.cssPrefix=e1.familyPrefix);var F2=h(h({},E6),e1);F2.autoReplaceSvg||(F2.observeMutations=!1);var p={};Object.keys(E6).forEach(function(a){Object.defineProperty(p,a,{enumerable:!0,set:function(i){F2[a]=i,i1.forEach(function(e){return e(p)})},get:function(){return F2[a]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){F2.cssPrefix=c,i1.forEach(function(i){return i(p)})},get:function(){return F2.cssPrefix}});m2.FontAwesomeConfig=p;var i1=[];function V8(a){return i1.push(a),function(){i1.splice(i1.indexOf(a),1)}}var f2=L3,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M8(a){if(!(!a||!a2)){var c=y.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=y.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],t=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(e=s)}return y.head.insertBefore(c,e),a}}var C8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o1(){for(var a=12,c="";a-- >0;)c+=C8[Math.random()*62|0];return c}function P2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function B3(a){return a.classList?P2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function B6(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g8(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(B6(a[i]),'" ')},"").trim()}function W1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function I3(a){return a.size!==$.size||a.x!==$.x||a.y!==$.y||a.rotate!==$.rotate||a.flipX||a.flipY}function L8(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),n="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(t," ").concat(n)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:m}}function x8(a){var c=a.transform,i=a.width,e=i===void 0?L3:i,r=a.height,s=r===void 0?L3:r,t=a.startCentered,n=t===void 0?!1:t,o="";return n&&k6?o+="translate(".concat(c.x/f2-e/2,"em, ").concat(c.y/f2-s/2,"em) "):n?o+="translate(calc(-50% + ".concat(c.x/f2,"em), calc(-50% + ").concat(c.y/f2,"em)) "):o+="translate(".concat(c.x/f2,"em, ").concat(c.y/f2,"em) "),o+="scale(".concat(c.size/f2*(c.flipX?-1:1),", ").concat(c.size/f2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var b8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function I6(){var a=D6,c=T6,i=p.cssPrefix,e=p.replacementClass,r=b8;if(i!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),t=new RegExp("\\--".concat(a,"\\-"),"g"),n=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(i,"-")).replace(t,"--".concat(i,"-")).replace(n,".".concat(e))}return r}var l6=!1;function z3(){p.autoAddCss&&!l6&&(M8(I6()),l6=!0)}var y8={mixout:function(){return{dom:{css:I6,insertCss:z3}}},hooks:function(){return{beforeDOMElementCreation:function(){z3()},beforeI2svg:function(){z3()}}}},J=m2||{};J[Z]||(J[Z]={});J[Z].styles||(J[Z].styles={});J[Z].hooks||(J[Z].hooks={});J[Z].shims||(J[Z].shims=[]);var G=J[Z],R6=[],N8=function a(){y.removeEventListener("DOMContentLoaded",a),U1=1,R6.map(function(c){return c()})},U1=!1;a2&&(U1=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),U1||y.addEventListener("DOMContentLoaded",N8));function S8(a){a2&&(U1?setTimeout(a,0):R6.push(a))}function m1(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,s=r===void 0?[]:r;return typeof a=="string"?B6(a):"<".concat(c," ").concat(g8(e),">").concat(s.map(m1).join(""),"</").concat(c,">")}function f6(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var w8=function(c,i){return function(e,r,s,t){return c.call(i,e,r,s,t)}},V3=function(c,i,e,r){var s=Object.keys(c),t=s.length,n=r!==void 0?w8(i,r):i,o,m,l;for(e===void 0?(o=1,l=c[s[0]]):(o=0,l=e);o<t;o++)m=s[o],l=n(l,c[m],m,c);return l};function A8(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=a.charCodeAt(i++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function b3(a){var c=A8(a);return c.length===1?c[0].toString(16):null}function k8(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function m6(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function y3(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=m6(c);typeof G.hooks.addPack=="function"&&!r?G.hooks.addPack(a,m6(c)):G.styles[a]=h(h({},G.styles[a]||{}),s),a==="fas"&&y3("fa",c)}var P1,E1,B1,D2=G.styles,D8=G.shims,T8=(P1={},w(P1,b,Object.values(t1[b])),w(P1,N,Object.values(t1[N])),P1),R3=null,O6={},U6={},G6={},W6={},q6={},_8=(E1={},w(E1,b,Object.keys(r1[b])),w(E1,N,Object.keys(r1[N])),E1);function F8(a){return~d8.indexOf(a)}function P8(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!F8(r)?r:null}var j6=function(){var c=function(s){return V3(D2,function(t,n,o){return t[o]=V3(n,s,{}),t},{})};O6=c(function(r,s,t){if(s[3]&&(r[s[3]]=t),s[2]){var n=s[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=t})}return r}),U6=c(function(r,s,t){if(r[t]=t,s[2]){var n=s[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=t})}return r}),q6=c(function(r,s,t){var n=s[2];return r[t]=t,n.forEach(function(o){r[o]=t}),r});var i="far"in D2||p.autoFetchSvg,e=V3(D8,function(r,s){var t=s[0],n=s[1],o=s[2];return n==="far"&&!i&&(n="fas"),typeof t=="string"&&(r.names[t]={prefix:n,iconName:o}),typeof t=="number"&&(r.unicodes[t.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});G6=e.names,W6=e.unicodes,R3=q1(p.styleDefault,{family:p.familyDefault})};V8(function(a){R3=q1(a.styleDefault,{family:p.familyDefault})});j6();function O3(a,c){return(O6[a]||{})[c]}function E8(a,c){return(U6[a]||{})[c]}function x2(a,c){return(q6[a]||{})[c]}function $6(a){return G6[a]||{prefix:null,iconName:null}}function B8(a){var c=W6[a],i=O3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function h2(){return R3}var U3=function(){return{prefix:null,iconName:null,rest:[]}};function q1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?b:i,r=r1[e][a],s=s1[e][a]||s1[e][r],t=a in G.styles?a:null;return s||t||null}var h6=(B1={},w(B1,b,Object.keys(t1[b])),w(B1,N,Object.keys(t1[N])),B1);function j1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(c={},w(c,b,"".concat(p.cssPrefix,"-").concat(b)),w(c,N,"".concat(p.cssPrefix,"-").concat(N)),c),t=null,n=b;(a.includes(s[b])||a.some(function(m){return h6[b].includes(m)}))&&(n=b),(a.includes(s[N])||a.some(function(m){return h6[N].includes(m)}))&&(n=N);var o=a.reduce(function(m,l){var u=P8(p.cssPrefix,l);if(D2[l]?(l=T8[n].includes(l)?f8[n][l]:l,t=l,m.prefix=l):_8[n].indexOf(l)>-1?(t=l,m.prefix=q1(l,{family:n})):u?m.iconName=u:l!==p.replacementClass&&l!==s[b]&&l!==s[N]&&m.rest.push(l),!r&&m.prefix&&m.iconName){var z=t==="fa"?$6(m.iconName):{},g=x2(m.prefix,m.iconName);z.prefix&&(t=null),m.iconName=z.iconName||g||m.iconName,m.prefix=z.prefix||m.prefix,m.prefix==="far"&&!D2.far&&D2.fas&&!p.autoFetchSvg&&(m.prefix="fas")}return m},U3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&n===N&&(D2.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=x2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||t==="fa")&&(o.prefix=h2()||"fas"),o}var I8=function(){function a(){Z0(this,a),this.definitions={}}return J0(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var t=r.reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){i.definitions[n]=h(h({},i.definitions[n]||{}),t[n]),y3(n,t[n]);var o=t1[b][n];o&&y3(o,t[n]),j6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var t=r[s],n=t.prefix,o=t.iconName,m=t.icon,l=m[2];i[n]||(i[n]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(i[n][u]=m)}),i[n][o]=m}),i}}]),a}(),u6=[],T2={},_2={},R8=Object.keys(_2);function O8(a,c){var i=c.mixoutsTo;return u6=a,T2={},Object.keys(_2).forEach(function(e){R8.indexOf(e)===-1&&delete _2[e]}),u6.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(t){typeof r[t]=="function"&&(i[t]=r[t]),O1(r[t])==="object"&&Object.keys(r[t]).forEach(function(n){i[t]||(i[t]={}),i[t][n]=r[t][n]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(t){T2[t]||(T2[t]=[]),T2[t].push(s[t])})}e.provides&&e.provides(_2)}),i}function N3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=T2[a]||[];return s.forEach(function(t){c=t.apply(null,[c].concat(e))}),c}function y2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=T2[a]||[];r.forEach(function(s){s.apply(null,i)})}function c2(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return _2[a]?_2[a].apply(null,c):void 0}function S3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||h2();if(c)return c=x2(i,c)||c,f6(X6.definitions,i,c)||f6(G.styles,i,c)}var X6=new I8,U8=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,y2("noAuto")},G8={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a2?(y2("beforeI2svg",c),c2("pseudoElements2svg",c),c2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,S8(function(){q8({autoReplaceSvgRoot:i}),y2("watch",c)})}},W8={icon:function(c){if(c===null)return null;if(O1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:x2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=q1(c[0]);return{prefix:e,iconName:x2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(m8))){var r=j1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||h2(),iconName:x2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=h2();return{prefix:s,iconName:x2(s,c)||c}}}},R={noAuto:U8,config:p,dom:G8,parse:W8,library:X6,findIconDefinition:S3,toHtml:m1},q8=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?y:i;(Object.keys(G.styles).length>0||p.autoFetchSvg)&&a2&&p.autoReplaceSvg&&R.dom.i2svg({node:e})};function $1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return m1(e)})}}),Object.defineProperty(a,"node",{get:function(){if(a2){var e=y.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function j8(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,s=a.styles,t=a.transform;if(I3(t)&&i.found&&!e.found){var n=i.width,o=i.height,m={x:n/o/2,y:.5};r.style=W1(h(h({},s),{},{"transform-origin":"".concat(m.x+t.x/16,"em ").concat(m.y+t.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function $8(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,s=a.symbol,t=s===!0?"".concat(c,"-").concat(p.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:t}),children:e}]}]}function G3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,s=a.iconName,t=a.transform,n=a.symbol,o=a.title,m=a.maskId,l=a.titleId,u=a.extra,z=a.watchable,g=z===void 0?!1:z,A=e.found?e:i,F=A.width,P=A.height,W=r==="fak",T=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(function(e2){return u.classes.indexOf(e2)===-1}).filter(function(e2){return e2!==""||!!e2}).concat(u.classes).join(" "),E={children:[],attributes:h(h({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:T,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(P)})},q=W&&!~u.classes.indexOf("fa-fw")?{width:"".concat(F/P*16*.0625,"em")}:{};g&&(E.attributes[b2]=""),o&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||o1())},children:[o]}),delete E.attributes.title);var I=h(h({},E),{},{prefix:r,iconName:s,main:i,mask:e,maskId:m,transform:t,symbol:n,styles:h(h({},q),u.styles)}),p2=e.found&&i.found?c2("generateAbstractMask",I)||{children:[],attributes:{}}:c2("generateAbstractIcon",I)||{children:[],attributes:{}},d2=p2.children,e3=p2.attributes;return I.children=d2,I.attributes=e3,n?$8(I):j8(I)}function v6(a){var c=a.content,i=a.width,e=a.height,r=a.transform,s=a.title,t=a.extra,n=a.watchable,o=n===void 0?!1:n,m=h(h(h({},t.attributes),s?{title:s}:{}),{},{class:t.classes.join(" ")});o&&(m[b2]="");var l=h({},t.styles);I3(r)&&(l.transform=x8({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var u=W1(l);u.length>0&&(m.style=u);var z=[];return z.push({tag:"span",attributes:m,children:[c]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function X8(a){var c=a.content,i=a.title,e=a.extra,r=h(h(h({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=W1(e.styles);s.length>0&&(r.style=s);var t=[];return t.push({tag:"span",attributes:r,children:[c]}),i&&t.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),t}var M3=G.styles;function w3(a){var c=a[0],i=a[1],e=a.slice(4),r=T3(e,1),s=r[0],t=null;return Array.isArray(s)?t={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(L2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(L2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(L2.PRIMARY),fill:"currentColor",d:s[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:i,icon:t}}var Y8={found:!1,width:512,height:512};function Q8(a,c){!_6&&!p.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function A3(a,c){var i=c;return c==="fa"&&p.styleDefault!==null&&(c=h2()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:c2("missingIconAbstract")||{}};if(i==="fa"){var t=$6(a)||{};a=t.iconName||a,c=t.prefix||c}if(a&&c&&M3[c]&&M3[c][a]){var n=M3[c][a];return e(w3(n))}Q8(a,c),e(h(h({},Y8),{},{icon:p.showMissingIcons&&a?c2("missingIconAbstract")||{}:{}}))})}var p6=function(){},k3=p.measurePerformance&&A1&&A1.mark&&A1.measure?A1:{mark:p6,measure:p6},a1='FA "6.5.2"',K8=function(c){return k3.mark("".concat(a1," ").concat(c," begins")),function(){return Y6(c)}},Y6=function(c){k3.mark("".concat(a1," ").concat(c," ends")),k3.measure("".concat(a1," ").concat(c),"".concat(a1," ").concat(c," begins"),"".concat(a1," ").concat(c," ends"))},W3={begin:K8,end:Y6},I1=function(){};function d6(a){var c=a.getAttribute?a.getAttribute(b2):null;return typeof c=="string"}function Z8(a){var c=a.getAttribute?a.getAttribute(F3):null,i=a.getAttribute?a.getAttribute(P3):null;return c&&i}function J8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(p.replacementClass)}function c5(){if(p.autoReplaceSvg===!0)return R1.replace;var a=R1[p.autoReplaceSvg];return a||R1.replace}function a5(a){return y.createElementNS("http://www.w3.org/2000/svg",a)}function e5(a){return y.createElement(a)}function Q6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?a5:e5:i;if(typeof a=="string")return y.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(t){r.setAttribute(t,a.attributes[t])});var s=a.children||[];return s.forEach(function(t){r.appendChild(Q6(t,{ceFn:e}))}),r}function i5(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var R1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(Q6(r),i)}),i.getAttribute(b2)===null&&p.keepOriginalSource){var e=y.createComment(i5(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~B3(i).indexOf(p.replacementClass))return R1.replace(c);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(n,o){return o===p.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var t=e.map(function(n){return m1(n)}).join(`
`);i.setAttribute(b2,""),i.innerHTML=t}};function H6(a){a()}function K6(a,c){var i=typeof c=="function"?c:I1;if(a.length===0)i();else{var e=H6;p.mutateApproach===o8&&(e=m2.requestAnimationFrame||H6),e(function(){var r=c5(),s=W3.begin("mutate");a.map(r),s(),i()})}}var q3=!1;function Z6(){q3=!0}function D3(){q3=!1}var G1=null;function z6(a){if(t6&&p.observeMutations){var c=a.treeCallback,i=c===void 0?I1:c,e=a.nodeCallback,r=e===void 0?I1:e,s=a.pseudoElementsCallback,t=s===void 0?I1:s,n=a.observeMutationsRoot,o=n===void 0?y:n;G1=new t6(function(m){if(!q3){var l=h2();P2(m).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!d6(u.addedNodes[0])&&(p.searchPseudoElements&&t(u.target),i(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&t(u.target.parentNode),u.type==="attributes"&&d6(u.target)&&~p8.indexOf(u.attributeName))if(u.attributeName==="class"&&Z8(u.target)){var z=j1(B3(u.target)),g=z.prefix,A=z.iconName;u.target.setAttribute(F3,g||l),A&&u.target.setAttribute(P3,A)}else J8(u.target)&&r(u.target)})}}),a2&&G1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function r5(){G1&&G1.disconnect()}function s5(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var s=r.split(":"),t=s[0],n=s.slice(1);return t&&n.length>0&&(e[t]=n.join(":").trim()),e},{})),i}function t5(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=j1(B3(a));return r.prefix||(r.prefix=h2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=E8(r.prefix,a.innerText)||O3(r.prefix,b3(a.innerText))),!r.iconName&&p.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function n5(a){var c=P2(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return p.autoA11y&&(i?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||o1()):(c["aria-hidden"]="true",c.focusable="false")),c}function o5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=t5(a),e=i.iconName,r=i.prefix,s=i.rest,t=n5(a),n=N3("parseNodeAttributes",{},a),o=c.styleParser?s5(a):[];return h({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:t}},n)}var l5=G.styles;function J6(a){var c=p.autoReplaceSvg==="nest"?V6(a,{styleParser:!1}):V6(a);return~c.extra.classes.indexOf(F6)?c2("generateLayersText",a,c):c2("generateSvgReplacementMutation",a,c)}var u2=new Set;E3.map(function(a){u2.add("fa-".concat(a))});Object.keys(r1[b]).map(u2.add.bind(u2));Object.keys(r1[N]).map(u2.add.bind(u2));u2=l1(u2);function M6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a2)return Promise.resolve();var i=y.documentElement.classList,e=function(u){return i.add("".concat(n6,"-").concat(u))},r=function(u){return i.remove("".concat(n6,"-").concat(u))},s=p.autoFetchSvg?u2:E3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(l5));s.includes("fa")||s.push("fa");var t=[".".concat(F6,":not([").concat(b2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(b2,"])")})).join(", ");if(t.length===0)return Promise.resolve();var n=[];try{n=P2(a.querySelectorAll(t))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var o=W3.begin("onTree"),m=n.reduce(function(l,u){try{var z=J6(u);z&&l.push(z)}catch(g){_6||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,u){Promise.all(m).then(function(z){K6(z,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(z){o(),u(z)})})}function f5(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;J6(a).then(function(i){i&&K6([i],c)})}function m5(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:S3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:S3(r||{})),a(e,h(h({},i),{},{mask:r}))}}var h5=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?$:e,s=i.symbol,t=s===void 0?!1:s,n=i.mask,o=n===void 0?null:n,m=i.maskId,l=m===void 0?null:m,u=i.title,z=u===void 0?null:u,g=i.titleId,A=g===void 0?null:g,F=i.classes,P=F===void 0?[]:F,W=i.attributes,T=W===void 0?{}:W,E=i.styles,q=E===void 0?{}:E;if(c){var I=c.prefix,p2=c.iconName,d2=c.icon;return $1(h({type:"icon"},c),function(){return y2("beforeDOMElementCreation",{iconDefinition:c,params:i}),p.autoA11y&&(z?T["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(A||o1()):(T["aria-hidden"]="true",T.focusable="false")),G3({icons:{main:w3(d2),mask:o?w3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:p2,transform:h(h({},$),r),symbol:t,title:z,maskId:l,titleId:A,extra:{attributes:T,styles:q,classes:P}})})}},u5={mixout:function(){return{icon:m5(h5)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=M6,i.nodeCallback=f5,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?y:e,s=i.callback,t=s===void 0?function(){}:s;return M6(r,t)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,t=e.titleId,n=e.prefix,o=e.transform,m=e.symbol,l=e.mask,u=e.maskId,z=e.extra;return new Promise(function(g,A){Promise.all([A3(r,n),l.iconName?A3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var P=T3(F,2),W=P[0],T=P[1];g([i,G3({icons:{main:W,mask:T},prefix:n,iconName:r,transform:o,symbol:m,maskId:u,title:s,titleId:t,extra:z,watchable:!0})])}).catch(A)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,t=i.transform,n=i.styles,o=W1(n);o.length>0&&(r.style=o);var m;return I3(t)&&(m=c2("generateAbstractTransformGrouping",{main:s,transform:t,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:r}}}},v5={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return $1({type:"layer"},function(){y2("beforeDOMElementCreation",{assembler:i,params:e});var t=[];return i(function(n){Array.isArray(n)?n.map(function(o){t=t.concat(o.abstract)}):t=t.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(l1(s)).join(" ")},children:t}]})}}}},p5={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,t=e.classes,n=t===void 0?[]:t,o=e.attributes,m=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return $1({type:"counter",content:i},function(){return y2("beforeDOMElementCreation",{content:i,params:e}),X8({content:i.toString(),title:s,extra:{attributes:m,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(l1(n))}})})}}}},d5={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?$:r,t=e.title,n=t===void 0?null:t,o=e.classes,m=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,z=e.styles,g=z===void 0?{}:z;return $1({type:"text",content:i},function(){return y2("beforeDOMElementCreation",{content:i,params:e}),v6({content:i,transform:h(h({},$),s),title:n,extra:{attributes:u,styles:g,classes:["".concat(p.cssPrefix,"-layers-text")].concat(l1(m))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,s=e.transform,t=e.extra,n=null,o=null;if(k6){var m=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();n=l.width/m,o=l.height/m}return p.autoA11y&&!r&&(t.attributes["aria-hidden"]="true"),Promise.resolve([i,v6({content:i.innerHTML,width:n,height:o,transform:s,title:r,extra:t,watchable:!0})])}}},H5=new RegExp('"',"ug"),C6=[1105920,1112319];function z5(a){var c=a.replace(H5,""),i=k8(c,0),e=i>=C6[0]&&i<=C6[1],r=c.length===2?c[0]===c[1]:!1;return{value:b3(r?c[0]:c),isSecondary:e||r}}function g6(a,c){var i="".concat(n8).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var s=P2(a.children),t=s.filter(function(d2){return d2.getAttribute(x3)===c})[0],n=m2.getComputedStyle(a,c),o=n.getPropertyValue("font-family").match(h8),m=n.getPropertyValue("font-weight"),l=n.getPropertyValue("content");if(t&&!o)return a.removeChild(t),e();if(o&&l!=="none"&&l!==""){var u=n.getPropertyValue("content"),z=~["Sharp"].indexOf(o[2])?N:b,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?s1[z][o[2].toLowerCase()]:u8[z][m],A=z5(u),F=A.value,P=A.isSecondary,W=o[0].startsWith("FontAwesome"),T=O3(g,F),E=T;if(W){var q=B8(F);q.iconName&&q.prefix&&(T=q.iconName,g=q.prefix)}if(T&&!P&&(!t||t.getAttribute(F3)!==g||t.getAttribute(P3)!==E)){a.setAttribute(i,E),t&&a.removeChild(t);var I=o5(),p2=I.extra;p2.attributes[x3]=c,A3(T,g).then(function(d2){var e3=G3(h(h({},I),{},{icons:{main:d2,mask:U3()},prefix:g,iconName:E,extra:p2,watchable:!0})),e2=y.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(e2,a.firstChild):a.appendChild(e2),e2.outerHTML=e3.map(function(L0){return m1(L0)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function V5(a){return Promise.all([g6(a,"::before"),g6(a,"::after")])}function M5(a){return a.parentNode!==document.head&&!~l8.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(x3)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function L6(a){if(a2)return new Promise(function(c,i){var e=P2(a.querySelectorAll("*")).filter(M5).map(V5),r=W3.begin("searchPseudoElements");Z6(),Promise.all(e).then(function(){r(),D3(),c()}).catch(function(){r(),D3(),i()})})}var C5={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=L6,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?y:e;p.searchPseudoElements&&L6(r)}}},x6=!1,g5={mixout:function(){return{dom:{unwatch:function(){Z6(),x6=!0}}}},hooks:function(){return{bootstrap:function(){z6(N3("mutationObserverCallbacks",{}))},noAuto:function(){r5()},watch:function(i){var e=i.observeMutationsRoot;x6?D3():z6(N3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},b6=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),t=s[0],n=s.slice(1).join("-");if(t&&n==="h")return e.flipX=!0,e;if(t&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(t){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},i)},L5={mixout:function(){return{parse:{transform:function(i){return b6(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=b6(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,t=i.iconWidth,n={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(o," ").concat(m," ").concat(l)},z={transform:"translate(".concat(t/2*-1," -256)")},g={outer:n,inner:u,path:z};return{tag:"g",attributes:h({},g.outer),children:[{tag:"g",attributes:h({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:h(h({},e.icon.attributes),g.path)}]}]}}}},C3={x:0,y:0,width:"100%",height:"100%"};function y6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function x5(a){return a.tag==="g"?a.children:[a]}var b5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?j1(r.split(" ").map(function(t){return t.trim()})):U3();return s.prefix||(s.prefix=h2()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,t=i.mask,n=i.maskId,o=i.transform,m=s.width,l=s.icon,u=t.width,z=t.icon,g=L8({transform:o,containerWidth:u,iconWidth:m}),A={tag:"rect",attributes:h(h({},C3),{},{fill:"white"})},F=l.children?{children:l.children.map(y6)}:{},P={tag:"g",attributes:h({},g.inner),children:[y6(h({tag:l.tag,attributes:h(h({},l.attributes),g.path)},F))]},W={tag:"g",attributes:h({},g.outer),children:[P]},T="mask-".concat(n||o1()),E="clip-".concat(n||o1()),q={tag:"mask",attributes:h(h({},C3),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,W]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:x5(z)},q]};return e.push(I,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(T,")")},C3)}),{children:e,attributes:r}}}},y5={provides:function(c){var i=!1;m2.matchMedia&&(i=m2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var t=h(h({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||n.children.push({tag:"animate",attributes:h(h({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},t),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},t),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},N5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},S5=[y8,u5,v5,p5,d5,C5,g5,L5,b5,y5,N5];O8(S5,{mixoutsTo:R});var D7=R.noAuto,T7=R.config,_7=R.library,F7=R.dom,c0=R.parse,P7=R.findIconDefinition,E7=R.toHtml,a0=R.icon,B7=R.layer,w5=R.text,A5=R.counter;var D5=["*"],T5=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},_5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},F5=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},P5=a=>a.prefix!==void 0&&a.iconName!==void 0,E5=(a,c)=>P5(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},B5=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=j({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),I5=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(t=>r[t]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=j({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),R5=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=U({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[t2]});let a=c;return a})(),O5=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(V(q2),V(N2))},c.\u0275cmp=L({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[t2,x],ngContentSelectors:D5,decls:1,vars:0,template:function(r,s){r&1&&(t4(),n4(0))},encapsulation:2});let a=c;return a})(),v2=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,t,n){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=t,this.classes=[],n!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){_5();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let t=this.buildParams();this.renderIcon(s,t)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=E5(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(T5(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?c0.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...F5(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=a0(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(V(z1),V(B5),V(I5),V(R5,8),V(O5,8))},c.\u0275cmp=L({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(r4("innerHTML",s.renderedIconHTML,W2),o2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[t2,x],decls:0,vars:0,template:function(r,s){},encapsulation:2});let a=c;return a})();var X=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=H2({});let a=c;return a})();var Y1={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]};var Q1={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var K1={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]};var Z1={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]};var E2={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]};var J1={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};var B2={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]};var I2={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var R2={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var U5={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},c3=U5;var e0=(()=>{let c=class c{constructor(){this.faUser=Q1,this.faGhost=Y1,this.faMugHot=K1,this.faCoffee=c3,this.faSort=Z1,this.faHouse=J1,this.faMagnifyingGlass=I2,this.faFilter=E2,this.faBell=B2,this.faChevronDown=R2}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-sidebar"]],standalone:!0,features:[x],decls:26,vars:5,consts:[[1,"sidebar"],[1,"logo"],["src","assets/images/logo.png","alt","",2,"width","70px"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"fa-lg",3,"icon"],["routerLink","/home"],["routerLink","/product"]],template:function(r,s){r&1&&(f(0,"div",0)(1,"div",1),M(2,"img",2),v(),f(3,"ul",3)(4,"li",4),M(5,"fa-icon",5),f(6,"a",6)(7,"span"),d(8,"Home"),v()()(),f(9,"li",4),M(10,"fa-icon",5),f(11,"a",7)(12,"span"),d(13,"Product"),v()()(),f(14,"li",4),M(15,"fa-icon",5),f(16,"span"),d(17,"Contact"),v()(),f(18,"li",4),M(19,"fa-icon",5),f(20,"span"),d(21,"Bill"),v()(),f(22,"li",4),M(23,"fa-icon",5),f(24,"span"),d(25,"Client"),v()()()()),r&2&&(H(5),C("icon",s.faHouse),H(5),C("icon",s.faMugHot),H(5),C("icon",s.faSort),H(4),C("icon",s.faUser),H(4),C("icon",s.faGhost))},dependencies:[X,v2,C1],styles:["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;opacity:.9}"]});let a=c;return a})();var r0=(()=>{let c=class c{constructor(){this.date=new Date}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-productitem"]],inputs:{product:"product"},standalone:!0,features:[x],decls:22,vars:10,consts:[[1,"cart","row"],[1,"col-3"],["width","200","src","assets/images/img1.jpeg","alt",""],[1,"col-9","d-flex","flex-column","justify-content-between","cart-content"],[1,"d-flex","align-items-start"],[1,"cart-title"],[1,"townhouse"],[1,"d-flex","justify-content-between"],[1,"price"]],template:function(r,s){r&1&&(f(0,"div",0)(1,"div",1),M(2,"img",2),v(),f(3,"div",3)(4,"div")(5,"div",4)(6,"span",5),d(7),d1(8,"uppercase"),v(),f(9,"span"),d(10," - "),v(),f(11,"span",6),d(12,"Townhouse"),v()(),f(13,"small"),d(14,"2 bedrooms \u2022 2 bathrooms \u2022 240m2"),v()(),f(15,"div",7)(16,"span",8),d(17),d1(18,"currency"),v(),f(19,"small"),d(20),d1(21,"date"),v()()()()),r&2&&(H(7),_("",n3(8,3,s.product.name)," "),H(10),X2(n3(18,5,s.product.price)),H(3),_(" ",h4(21,7,s.date,"dd-MM-Y")," "))},dependencies:[l2,z4,M4,V4]});let a=c;return a})();var s0=(()=>{let c=class c{constructor(){this.searchParams=new Y,this.faMagnifyingGlass=I2,this.q=""}handleSearch(){this.searchParams.emit(this.q)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-search"]],outputs:{searchParams:"searchParams"},standalone:!0,features:[x],decls:3,vars:2,consts:[[1,"input-group","mb-3"],[1,"icon-search",3,"icon"],["type","text","placeholder","Search","aria-label","Text input with checkbox",1,"form-control",3,"keyup.enter","ngModelChange","ngModel"]],template:function(r,s){r&1&&(f(0,"div",0),M(1,"fa-icon",1),f(2,"input",2),k("keyup.enter",function(){return s.handleSearch()}),m4("ngModelChange",function(n){return f4(s.q,n)||(s.q=n),n}),v()()),r&2&&(H(),C("icon",s.faMagnifyingGlass),H(),l4("ngModel",s.q))},dependencies:[X,v2,k2,A2,S1,c1]});let a=c;return a})();function G5(a,c){if(a&1){let i=g2();f(0,"app-productitem",5),k("click",function(){let r=M2(i).$implicit,s=D();return C2(s.handleClickItem(r))}),v()}if(a&2){let i=c.$implicit;C("product",i)}}var t0=(()=>{let c=class c{constructor(){this.productItem=new Y,this.faFilter=E2,this.name="Iphone 14",this.params="",this.listProduct=[{name:"Iphone 11",price:1123632424},{name:"Iphone 10",price:6767676786},{name:"Iphone 13",price:455655565},{name:"Iphone 12",price:242455522}]}handleClickItem(e){console.log(e),this.productItem.emit(e)}getParamsSearch(e){this.params=e}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-content"]],outputs:{productItem:"productItem"},standalone:!0,features:[x],decls:11,vars:3,consts:[[1,"content"],[3,"searchParams"],[1,"d-flex","justify-content-between"],[3,"icon"],["routerLink","/product/detail",3,"product","click",4,"ngFor","ngForOf"],["routerLink","/product/detail",3,"click","product"]],template:function(r,s){r&1&&(f(0,"div",0)(1,"app-search",1),k("searchParams",function(n){return s.getParamsSearch(n)}),v(),f(2,"div",2)(3,"h5"),d(4,"All Listings "),v(),f(5,"small"),d(6),v(),f(7,"div"),M(8,"fa-icon",3),d(9," Filter "),v()(),Q(10,G5,1,1,"app-productitem",4),v()),r&2&&(H(6),_('Searching " ',s.params,'" '),H(2),C("icon",s.faFilter),H(2),C("ngForOf",s.listProduct))},dependencies:[X,v2,r0,s0,l2,H4,C1],styles:[".empty[_ngcontent-%COMP%]{opacity:.5}"]});let a=c;return a})();var n0=(()=>{let c=class c{constructor(){this.faChevronDown=R2,this.faBell=B2}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-userinfo"]],standalone:!0,features:[x],decls:8,vars:2,consts:[[1,"d-flex","align-items-center","justify-content-end","user-info"],[1,"fa-xl",3,"icon"],[1,"avatar"],["src","assets/images/img1.jpeg","alt","Avatar"],[3,"icon"]],template:function(r,s){r&1&&(f(0,"div",0)(1,"div"),M(2,"fa-icon",1),v(),f(3,"div",2),M(4,"img",3),d(5," Pham Van Chien "),v(),f(6,"div"),M(7,"fa-icon",4),v()()),r&2&&(H(2),C("icon",s.faBell),H(5),C("icon",s.faChevronDown))},dependencies:[X,v2],styles:[".user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:10px}"]});let a=c;return a})();var o0=(()=>{let c=class c{constructor(){this.count=1}ngDoCheck(){console.log("ngDoCheck")}ngOnChanges(e){console.log("ngOnChanges:  ",e)}ngOnInit(){console.log("ngOnInit")}handleClickCount(){this.count=this.count+1}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-productinfo"]],standalone:!0,features:[t2,x],decls:22,vars:3,consts:[[1,"content-info"],["src","assets/images/img1.jpeg","alt","info"],[1,"townhouse"],[1,"price"],[1,"d-flex","justify-content-end","align-items-end"],[1,"btn","btn-dark"],[1,"btn","btn-dark",3,"click"],["type","button",1,"btn","btn-dark","btn-detail"]],template:function(r,s){r&1&&(f(0,"div",0),M(1,"img",1),f(2,"h4"),d(3),v(),f(4,"p",2),d(5,"Apartment"),v(),f(6,"small"),d(7,"2 bedrooms \u2022 2 bathrooms \u2022 240m2"),v(),f(8,"p",3),d(9),v(),f(10,"p"),d(11," Follow the link below for a more detailed description. description of somebody/something a brief description of the software The name means \u2018no trees\u2019 and it is an accurate description of the island. Police have issued a description of the gunman. This is a film that defies description "),v(),f(12,"div",4)(13,"div")(14,"button",5),d(15,"-"),v(),d(16),f(17,"button",6),k("click",function(){return s.handleClickCount()}),d(18,"+"),v()(),f(19,"div")(20,"button",7),d(21,"Add Cart"),v()()()()),r&2&&(H(3),X2("Name"),H(6),X2(12324324353),H(7),_(" ",s.count," "))}});let a=c;return a})();var l0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-detail"]],inputs:{productInfo:"productInfo"},standalone:!0,features:[x],decls:2,vars:0,template:function(r,s){r&1&&(f(0,"aside"),M(1,"app-productinfo"),v())},dependencies:[o0]});let a=c;return a})();var f0=(()=>{let c=class c{constructor(){this.faUser=Q1,this.faGhost=Y1,this.faMugHot=K1,this.faCoffee=c3,this.faSort=Z1,this.faHouse=J1,this.faMagnifyingGlass=I2,this.faFilter=E2,this.faBell=B2,this.faChevronDown=R2,this.productInfo={}}getProductItem(e){this.productInfo=e}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-root"]],standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"d-flex"],[1,"col-2"],[1,"content"]],template:function(r,s){r&1&&(f(0,"main",0),M(1,"app-sidebar",1),f(2,"div",2)(3,"header"),M(4,"app-userinfo"),v(),M(5,"router-outlet"),v()())},dependencies:[S4,k2,X,e0,l2,n0],styles:[".content[_ngcontent-%COMP%]{width:100%}"]});let a=c;return a})();var m0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-home"]],standalone:!0,features:[x],decls:2,vars:0,template:function(r,s){r&1&&(f(0,"p"),d(1,"home works!"),v())}});let a=c;return a})();var h0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-product"]],standalone:!0,features:[x],decls:1,vars:0,consts:[[1,"col-7"]],template:function(r,s){r&1&&M(0,"app-content",0)},dependencies:[t0]});let a=c;return a})();var u0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=L({type:c,selectors:[["app-page-not-found"]],standalone:!0,features:[x],decls:2,vars:0,template:function(r,s){r&1&&(f(0,"p"),d(1,"page-not-found works!"),v())}});let a=c;return a})();var v0=["toast-component",""];function W5(a,c){if(a&1){let i=g2();f(0,"button",5),k("click",function(){M2(i);let r=D();return C2(r.remove())}),f(1,"span",6),d(2,"\xD7"),v()()}}function q5(a,c){if(a&1&&(s3(0),d(1),t3()),a&2){let i=D(2);H(),_("[",i.duplicatesCount+1,"]")}}function j5(a,c){if(a&1&&(f(0,"div"),d(1),Q(2,q5,2,1,"ng-container",4),v()),a&2){let i=D();K(i.options.titleClass),o2("aria-label",i.title),H(),_(" ",i.title," "),H(),C("ngIf",i.duplicatesCount)}}function $5(a,c){if(a&1&&M(0,"div",7),a&2){let i=D();K(i.options.messageClass),C("innerHTML",i.message,W2)}}function X5(a,c){if(a&1&&(f(0,"div",8),d(1),v()),a&2){let i=D();K(i.options.messageClass),o2("aria-label",i.message),H(),_(" ",i.message," ")}}function Y5(a,c){if(a&1&&(f(0,"div"),M(1,"div",9),v()),a&2){let i=D();H(),$2("width",i.width()+"%")}}function Q5(a,c){if(a&1){let i=g2();f(0,"button",5),k("click",function(){M2(i);let r=D();return C2(r.remove())}),f(1,"span",6),d(2,"\xD7"),v()()}}function K5(a,c){if(a&1&&(s3(0),d(1),t3()),a&2){let i=D(2);H(),_("[",i.duplicatesCount+1,"]")}}function Z5(a,c){if(a&1&&(f(0,"div"),d(1),Q(2,K5,2,1,"ng-container",4),v()),a&2){let i=D();K(i.options.titleClass),o2("aria-label",i.title),H(),_(" ",i.title," "),H(),C("ngIf",i.duplicatesCount)}}function J5(a,c){if(a&1&&M(0,"div",7),a&2){let i=D();K(i.options.messageClass),C("innerHTML",i.message,W2)}}function c7(a,c){if(a&1&&(f(0,"div",8),d(1),v()),a&2){let i=D();K(i.options.messageClass),o2("aria-label",i.message),H(),_(" ",i.message," ")}}function a7(a,c){if(a&1&&(f(0,"div"),M(1,"div",9),v()),a&2){let i=D();H(),$2("width",i.width()+"%")}}var j3=class{_attachedHost;component;viewContainerRef;injector;constructor(c,i){this.component=c,this.injector=i}attach(c,i){return this._attachedHost=c,c.attach(this,i)}detach(){let c=this._attachedHost;if(c)return this._attachedHost=void 0,c.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(c){this._attachedHost=c}},$3=class{_attachedPortal;_disposeFn;attach(c,i){return this._attachedPortal=c,this.attachComponentPortal(c,i)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(c){this._disposeFn=c}},X3=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new i2;_activate=new i2;_manualClose=new i2;_resetTimeout=new i2;_countDuplicate=new i2;constructor(c){this._overlayRef=c}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(c,i){c&&this._resetTimeout.next(),i&&this._countDuplicate.next(++this.duplicatesCount)}},O2=class{toastId;config;message;title;toastType;toastRef;_onTap=new i2;_onAction=new i2;constructor(c,i,e,r,s,t){this.toastId=c,this.config=i,this.message=e,this.title=r,this.toastType=s,this.toastRef=t,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(c){this._onAction.next(c)}onAction(){return this._onAction.asObservable()}},p0={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},d0=new r2("ToastConfig"),Y3=class extends $3{_hostDomElement;_componentFactoryResolver;_appRef;constructor(c,i,e){super(),this._hostDomElement=c,this._componentFactoryResolver=i,this._appRef=e}attachComponentPortal(c,i){let e=this._componentFactoryResolver.resolveComponentFactory(c.component),r;return r=e.create(c.injector),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.detachView(r.hostView),r.destroy()}),i?this._hostDomElement.insertBefore(this._getComponentRootNode(r),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(r)),r}_getComponentRootNode(c){return c.hostView.rootNodes[0]}},e7=(()=>{class a{_document=z2(l3);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let i=this._document.createElement("div");i.classList.add("overlay-container"),i.setAttribute("aria-live","polite"),this._document.body.appendChild(i),this._containerElement=i}static \u0275fac=function(e){return new(e||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Q3=class{_portalHost;constructor(c){this._portalHost=c}attach(c,i=!0){return this._portalHost.attach(c,i)}detach(){return this._portalHost.detach()}},i7=(()=>{class a{_overlayContainer=z2(e7);_componentFactoryResolver=z2(i4);_appRef=z2(H1);_document=z2(l3);_paneElements=new Map;create(i,e){return this._createOverlayRef(this.getPaneElement(i,e))}getPaneElement(i="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[i]||(this._paneElements.get(e)[i]=this._createPaneElement(i,e)),this._paneElements.get(e)[i]}_createPaneElement(i,e){let r=this._document.createElement("div");return r.id="toast-container",r.classList.add(i),r.classList.add("toast-container"),e?e.getContainerElement().appendChild(r):this._overlayContainer.getContainerElement().appendChild(r),r}_createPortalHost(i){return new Y3(i,this._componentFactoryResolver,this._appRef)}_createOverlayRef(i){return new Q3(this._createPortalHost(i))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),a3=(()=>{class a{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(i,e,r,s,t){this.overlay=e,this._injector=r,this.sanitizer=s,this.ngZone=t,this.toastrConfig=S(S({},i.default),i.config),i.config.iconClasses&&(this.toastrConfig.iconClasses=S(S({},i.default.iconClasses),i.config.iconClasses))}show(i,e,r={},s=""){return this._preBuildNotification(s,i,e,this.applyConfig(r))}success(i,e,r={}){let s=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(s,i,e,this.applyConfig(r))}error(i,e,r={}){let s=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(s,i,e,this.applyConfig(r))}info(i,e,r={}){let s=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(s,i,e,this.applyConfig(r))}warning(i,e,r={}){let s=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(s,i,e,this.applyConfig(r))}clear(i){for(let e of this.toasts)if(i!==void 0){if(e.toastId===i){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(i){let e=this._findToast(i);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let r=this.toasts[this.currentlyActive].toastRef;r.isInactive()||(this.currentlyActive=this.currentlyActive+1,r.activate())}return!0}findDuplicate(i="",e="",r,s){let{includeTitleDuplicates:t}=this.toastrConfig;for(let n of this.toasts){let o=t&&n.title===i;if((!t||o)&&n.message===e)return n.toastRef.onDuplicate(r,s),n}return null}applyConfig(i={}){return S(S({},this.toastrConfig),i)}_findToast(i){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===i)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(i,e,r,s){return s.onActivateTick?this.ngZone.run(()=>this._buildNotification(i,e,r,s)):this._buildNotification(i,e,r,s)}_buildNotification(i,e,r,s){if(!s.toastComponent)throw new Error("toastComponent required");let t=this.findDuplicate(r,e,this.toastrConfig.resetTimeoutOnDuplicate&&s.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&r||e)&&this.toastrConfig.preventDuplicates&&t!==null)return t;this.previousToastMessage=e;let n=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(n=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let o=this.overlay.create(s.positionClass,this.overlayContainer);this.index=this.index+1;let m=e;e&&s.enableHtml&&(m=this.sanitizer.sanitize(e4.HTML,e));let l=new X3(o),u=new O2(this.index,s,m,r,i,l),z=[{provide:O2,useValue:u}],g=G2.create({providers:z,parent:this._injector}),A=new j3(s.toastComponent,g),F=o.attach(A,s.newestOnTop);l.componentInstance=F.instance;let P={toastId:this.index,title:r||"",message:e||"",toastRef:l,onShown:l.afterActivate(),onHidden:l.afterClosed(),onTap:u.onTap(),onAction:u.onAction(),portal:F};return n||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{P.toastRef.activate()})),this.toasts.push(P),P}static \u0275fac=function(e){return new(e||a)(s2(d0),s2(i7),s2(G2),s2(z1),s2(r3))};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),r7=(()=>{class a{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=j2(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,e,r){this.toastrService=i,this.toastPackage=e,this.ngZone=r,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(s=>{this.duplicatesCount=s}),this.state=j2({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(i=>O(S({},i),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),e=this.hideTime-i;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(i=>O(S({},i),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(i=>O(S({},i),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(i,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(i),e)):this.timeout=setTimeout(()=>i(),e)}outsideInterval(i,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(i),e)):this.intervalId=setInterval(()=>i(),e)}runInsideAngular(i){this.ngZone?this.ngZone.run(()=>i()):i()}static \u0275fac=function(e){return new(e||a)(V(a3),V(O2),V(r3))};static \u0275cmp=L({type:a,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,r){e&1&&k("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),e&2&&(s4("@flyInOut",r._state),K(r.toastClasses),$2("display",r.displayStyle))},standalone:!0,features:[x],attrs:v0,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,r){e&1&&Q(0,W5,3,0,"button",0)(1,j5,3,5,"div",1)(2,$5,1,3,"div",2)(3,X5,2,4,"div",3)(4,Y5,2,2,"div",4),e&2&&(C("ngIf",r.options.closeButton),H(),C("ngIf",r.title),H(),C("ngIf",r.message&&r.options.enableHtml),H(),C("ngIf",r.message&&!r.options.enableHtml),H(),C("ngIf",r.options.progressBar))},dependencies:[Y2],encapsulation:2,data:{animation:[b4("flyInOut",[M1("inactive",V1({opacity:0})),M1("active",V1({opacity:1})),M1("removed",V1({opacity:0})),m3("inactive => active",f3("{{ easeTime }}ms {{ easing }}")),m3("active => removed",f3("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return a})(),s7=O(S({},p0),{toastComponent:r7}),K3=(a={})=>a4([{provide:d0,useValue:{default:s7,config:a}}]),H0=(()=>{class a{static forRoot(i={}){return{ngModule:a,providers:[K3(i)]}}static \u0275fac=function(e){return new(e||a)};static \u0275mod=V2({type:a});static \u0275inj=H2({})}return a})();var t7=(()=>{class a{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=j2(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=j2("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(i,e,r){this.toastrService=i,this.toastPackage=e,this.appRef=r,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(s=>{this.duplicatesCount=s})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let i=new Date().getTime(),e=this.hideTime-i;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(r=>100-r),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||a)(V(a3),V(O2),V(H1))};static \u0275cmp=L({type:a,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,r){e&1&&k("click",function(){return r.tapToast()})("mouseenter",function(){return r.stickAround()})("mouseleave",function(){return r.delayedHideToast()}),e&2&&(K(r.toastClasses),$2("display",r.displayStyle))},standalone:!0,features:[x],attrs:v0,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,r){e&1&&Q(0,Q5,3,0,"button",0)(1,Z5,3,5,"div",1)(2,J5,1,3,"div",2)(3,c7,2,4,"div",3)(4,a7,2,2,"div",4),e&2&&(C("ngIf",r.options.closeButton),H(),C("ngIf",r.title),H(),C("ngIf",r.message&&r.options.enableHtml),H(),C("ngIf",r.message&&!r.options.enableHtml),H(),C("ngIf",r.options.progressBar))},dependencies:[Y2],encapsulation:2,changeDetection:0})}return a})(),Yc=O(S({},p0),{toastComponent:t7});var z0=(()=>{let c=class c{constructor(e){this.httpService=e,this.url="http://localhost:8000/auth/"}register(e,r){return this.httpService.post(this.url+"register",{email:e,password:r})}};c.\u0275fac=function(r){return new(r||c)(s2(C4))},c.\u0275prov=j({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function l7(a,c){if(a&1&&(f(0,"div",6),d(1),v()),a&2){let i=D();H(),_(" ",i.err.error.message,`
`)}}var V0=(()=>{let c=class c{constructor(e,r,s){this.authenService=e,this.route=r,this.toastr=s}onSubmit(e){this.authenService.register(e.value.email,e.value.password).subscribe(r=>{this.toastr.success("Register succesfully!"),localStorage.setItem("token",r.access_token),this.route.navigate(["/home"])},r=>{this.err=r})}};c.\u0275fac=function(r){return new(r||c)(V(z0),V(w4),V(a3))},c.\u0275cmp=L({type:c,selectors:[["app-register"]],standalone:!0,features:[x],decls:14,vars:1,consts:[["formLogin","ngForm"],["class","alert alert-danger","role","alert",4,"ngIf"],[3,"ngSubmit"],["type","email","ngModel","","name","email",1,"form-control"],["type","password","ngModel","","name","password",1,"form-control"],["type","submit",1,"btn","btn-info"],["role","alert",1,"alert","alert-danger"]],template:function(r,s){if(r&1){let t=g2();f(0,"h1"),d(1,"Register Form"),v(),Q(2,l7,2,1,"div",1),f(3,"form",2,0),k("ngSubmit",function(){M2(t);let o=o4(4);return C2(s.onSubmit(o))}),f(5,"label"),d(6,"Email"),v(),M(7,"input",3),f(8,"label"),d(9,"Password"),v(),M(10,"input",4)(11,"br"),f(12,"button",5),d(13,"Submit"),v()()}r&2&&(H(2),C("ngIf",s.err))},dependencies:[k2,J4,A2,S1,$4,c1,H3,l2,Y2,H0]});let a=c;return a})();var M0=[{path:"register",component:V0},{path:"home",component:m0},{path:"product",component:h0},{path:"product/detail",component:l0},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:u0}];var C0={providers:[A4(M0),x4(),g4(),y4(),K3()]};var f7={providers:[N4()]},g0=d4(C0,f7);var m7=()=>L4(f0,g0),L9=m7;export{L9 as a};
