var ANIM_WAIT=1,ANIM_RUNNING=2,ANIM_DONE=4,ANIM_DESTROY=8,Animation=function(n,i){this.status=ANIM_WAIT,this.func=n,i||(i=0),this.delay=i},Queue=function(){this.status=ANIM_WAIT,this.anims=[],this.index=-1,this.runningIndex=!1};Queue.prototype={addLevel:function(){this.index++,this.anims[this.index]=[]},append:function(n,i,t){return anim=new Animation(n,i),-1==this.index&&this.addLevel(),("undefined"==typeof t||isNaN(t)||t>this.index)&&(t=this.index),this.runningIndex!==!1&&t<=this.runningIndex?!1:(this.anims[t].push(anim),!0)},finishAnim:function(n){n=n.split("#"),this.anims[n[0]][n[1]].status=ANIM_DONE;for(var i=0;i<this.anims[n[0]].length;i++)if(this.anims[n[0]][i].status&(ANIM_WAIT|ANIM_RUNNING))return;this.next()},next:function(){function n(n,i){return function(){i.status=ANIM_RUNNING,i.func(n)}}if(this.status!=ANIM_DESTROY){if(this.runningIndex++,this.runningIndex>this.index)return void(this.status=ANIM_DONE);for(var i=this.anims[this.runningIndex].length,t={},s=0;i>s;s++){var e=this.anims[this.runningIndex][s],u=this.runningIndex+"#"+s;t[u]=n(u,e)}for(var s=0;i>s;s++){var e=this.anims[this.runningIndex][s],u=this.runningIndex+"#"+s;window.setTimeout(t[u],e.delay)}}},execute:function(){this.status!=ANIM_DESTROY&&(this.runningIndex=-1,this.status=ANIM_RUNNING,this.next())},destroy:function(){this.status=ANIM_DESTROY}};