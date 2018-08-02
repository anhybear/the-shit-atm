(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,2084);


(lib.BlackShit = function() {
	this.initialize(img.BlackShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,233);


(lib.CollectionDoor = function() {
	this.initialize(img.CollectionDoor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,585);


(lib.DisabledShit = function() {
	this.initialize(img.DisabledShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,233);


(lib.DisposalInProgress = function() {
	this.initialize(img.DisposalInProgress);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,853,85);


(lib.DisposedShit = function() {
	this.initialize(img.DisposedShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,447,557);


(lib.EnjoyYourShit = function() {
	this.initialize(img.EnjoyYourShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,85);


(lib.FeministShit = function() {
	this.initialize(img.FeministShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,236);


(lib.LGBTQShit = function() {
	this.initialize(img.LGBTQShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,232);


(lib.MuslimShit = function() {
	this.initialize(img.MuslimShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,236);


(lib.No = function() {
	this.initialize(img.No);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,85);


(lib.Oops = function() {
	this.initialize(img.Oops);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1016,85);


(lib.Start = function() {
	this.initialize(img.Start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,85);


(lib.Surprise = function() {
	this.initialize(img.Surprise);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,923,185);


(lib.TryADifferentShit = function() {
	this.initialize(img.TryADifferentShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,785,85);


(lib.WhiteShit = function() {
	this.initialize(img.WhiteShit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,236);


(lib.Yes = function() {
	this.initialize(img.Yes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,85);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Yes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.Yes();
	this.instance.parent = this;
	this.instance.setTransform(-13.7,-10.2,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah3BnIAAjNIDvAAIAADNg");
	this.shape.setTransform(-2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-13.7,y:-10.2}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-15,y:-11}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-14,y:-10}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-14,y:-10}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-10.2,27.4,20.4);


(lib.WhiteShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.WhiteShit();
	this.instance.parent = this;
	this.instance.setTransform(-19.4,-28.3,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212528").s().p("AjEEkIAApHIGJAAIAAJHg");
	this.shape.setTransform(-0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19.4,y:-28.3}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-21,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-28.3,38.9,56.7);


(lib.Start_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.Start();
	this.instance.parent = this;
	this.instance.setTransform(-24.1,-10.2,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjvBpIAAjRIHeAAIAADRg");
	this.shape.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24.1,y:-10.2}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-27,y:-11}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24,y:-10}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24,y:-10}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-10.2,48.3,20.4);


(lib.No_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.No();
	this.instance.parent = this;
	this.instance.setTransform(-10.7,-10.2,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhoBmIAAjLIDRAAIAADLg");
	this.shape.setTransform(-0.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-10.7,y:-10.2}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-12,y:-11}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-11,y:-10}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-11,y:-10}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-10.2,21.4,20.4);


(lib.MuslimShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.MuslimShit();
	this.instance.parent = this;
	this.instance.setTransform(-24.9,-28.3,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212528").s().p("Aj5EZIAAoxIHzAAIAAIxg");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24.9,y:-28.3}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-27,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-25,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-25,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-28.3,49.9,56.7);


(lib.LGBTQShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.LGBTQShit();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,-27.8,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjqEXIAAosIHVAAIAAIsg");
	this.shape.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-23.3,y:-27.8}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-26,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-24,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-27.8,46.6,55.7);


(lib.FeministShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.FeministShit();
	this.instance.parent = this;
	this.instance.setTransform(-28.8,-28.3,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212528").s().p("AkiEcIAAo2IJFAAIAAI2g");
	this.shape.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-28.8,y:-28.3}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-32,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-29,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-29,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.3,57.6,56.7);


(lib.DisabledShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.DisabledShit();
	this.instance.parent = this;
	this.instance.setTransform(-28.8,-27.9,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkhEXIAAotIJDAAIAAItg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-28.8,y:-27.9}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-32,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-29,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-29,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-27.9,57.6,55.9);


(lib.CollectionDoor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CollectionDoor();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CollectionDoor_1, new cjs.Rectangle(0,0,150.3,138.8), null);


(lib.BlackShit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ButtonSound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.BlackShit();
	this.instance.parent = this;
	this.instance.setTransform(-19.1,-27.9,0.24,0.24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai9EXIAAotIF7AAIAAItg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19.1,y:-27.9}}]}).to({state:[{t:this.instance,p:{scaleX:0.264,scaleY:0.264,x:-21,y:-31}}]},1).to({state:[{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19,y:-28}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-19,y:-28}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-27.9,38.2,55.9);


(lib.InteractiveAnimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.Start.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var Music1 = createjs.Sound.play("MusicTheme",{loop:-1, volume:0.5});
		
		this.WhiteShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
		
		this.FeministShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
		
		this.MuslimShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
		
		this.BlackShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
		
		this.LGBTQShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
		
		this.DisabledShit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			Music1.stop();
			this.gotoAndPlay(3);
		}
	}
	this.frame_24 = function() {
		var Poop = createjs.Sound.play("PoopingSound");
	}
	this.frame_96 = function() {
		var Reveal = createjs.Sound.play("RevealSound");
	}
	this.frame_217 = function() {
		var Music2 = createjs.Sound.play("MusicTheme2",{loop:-1, volume:0.4});
		
		this.Yes.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			Music2.stop();
			this.gotoAndStop(1);
		}
		
		this.No.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			Music2.stop();
			this.gotoAndPlay(312);
			var Ending = createjs.Sound.play("EndingMusic",{volume:0.4});
		}
	}
	this.frame_310 = function() {
		this.stop();
	}
	this.frame_491 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(72).call(this.frame_96).wait(121).call(this.frame_217).wait(93).call(this.frame_310).wait(181).call(this.frame_491).wait(1));

	// Enjoy Your Shit!
	this.instance = new lib.EnjoyYourShit();
	this.instance.parent = this;
	this.instance.setTransform(-402,-42,0.24,0.24);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(405).to({_off:false},0).wait(64).to({_off:true},1).wait(22));

	// Surprise
	this.instance_1 = new lib.Surprise();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-441,-54,0.24,0.24);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(322).to({_off:false},0).wait(71).to({_off:true},1).wait(98));

	// No
	this.No = new lib.No_1();
	this.No.parent = this;
	this.No.setTransform(-267.3,-10.8);
	this.No._off = true;
	new cjs.ButtonHelper(this.No, 0, 1, 2, false, new lib.No_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.No).wait(310).to({_off:false},0).to({_off:true},1).wait(181));

	// Yes
	this.Yes = new lib.Yes_1();
	this.Yes.parent = this;
	this.Yes.setTransform(-391.3,-10.8);
	this.Yes._off = true;
	new cjs.ButtonHelper(this.Yes, 0, 1, 2, false, new lib.Yes_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Yes).wait(310).to({_off:false},0).to({_off:true},1).wait(181));

	// Try A Different Shit?
	this.instance_2 = new lib.TryADifferentShit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-425,-77,0.24,0.24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},0).to({_off:true},1).wait(181));

	// Oops
	this.instance_3 = new lib.Oops();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-454,-42,0.24,0.24);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(226).to({_off:false},0).wait(72).to({_off:true},1).wait(193));

	// Disposal Progress
	this.instance_4 = new lib.DisposalInProgress();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-435,-42,0.24,0.24);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(72).to({_off:true},1).wait(407));

	// Disabled Shit
	this.DisabledShit = new lib.DisabledShit_1();
	this.DisabledShit.parent = this;
	this.DisabledShit.setTransform(-223.2,11);
	this.DisabledShit._off = true;
	new cjs.ButtonHelper(this.DisabledShit, 0, 1, 2, false, new lib.DisabledShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.DisabledShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// LGBTQ+ Shit
	this.LGBTQShit = new lib.LGBTQShit_1();
	this.LGBTQShit.parent = this;
	this.LGBTQShit.setTransform(-337.7,10.9);
	this.LGBTQShit._off = true;
	new cjs.ButtonHelper(this.LGBTQShit, 0, 1, 2, false, new lib.LGBTQShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.LGBTQShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// Black Shit
	this.BlackShit = new lib.BlackShit_1();
	this.BlackShit.parent = this;
	this.BlackShit.setTransform(-452.9,11);
	this.BlackShit._off = true;
	new cjs.ButtonHelper(this.BlackShit, 0, 1, 2, false, new lib.BlackShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BlackShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// Muslim Shit
	this.MuslimShit = new lib.MuslimShit_1();
	this.MuslimShit.parent = this;
	this.MuslimShit.setTransform(-223,-78.6);
	this.MuslimShit._off = true;
	new cjs.ButtonHelper(this.MuslimShit, 0, 1, 2, false, new lib.MuslimShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MuslimShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// Feminist Shit
	this.FeministShit = new lib.FeministShit_1();
	this.FeministShit.parent = this;
	this.FeministShit.setTransform(-337.2,-78.6);
	this.FeministShit._off = true;
	new cjs.ButtonHelper(this.FeministShit, 0, 1, 2, false, new lib.FeministShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.FeministShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// White Shit
	this.WhiteShit = new lib.WhiteShit_1();
	this.WhiteShit.parent = this;
	this.WhiteShit.setTransform(-452.5,-78.6);
	this.WhiteShit._off = true;
	new cjs.ButtonHelper(this.WhiteShit, 0, 1, 2, false, new lib.WhiteShit_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.WhiteShit).wait(1).to({_off:false},0).to({_off:true},1).wait(490));

	// Start
	this.Start = new lib.Start_1();
	this.Start.parent = this;
	this.Start.setTransform(-331.8,-31.8);
	new cjs.ButtonHelper(this.Start, 0, 1, 2, false, new lib.Start_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Start).to({_off:true},1).wait(491));

	// Collection Door
	this.instance_5 = new lib.CollectionDoor();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-75.1,-69.3,0.24,0.237);

	this.CollectionDoor = new lib.CollectionDoor_1();
	this.CollectionDoor.parent = this;
	this.CollectionDoor.setTransform(0,-69,1,1,0,0,0,75.1,0);
	this.CollectionDoor._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.CollectionDoor}]},96).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).to({state:[{t:this.CollectionDoor}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.CollectionDoor).wait(96).to({_off:false},0).wait(1).to({regY:69.4,scaleY:1,y:0},0).wait(1).to({scaleY:0.99,y:-0.3},0).wait(1).to({scaleY:0.98,y:-0.7},0).wait(1).to({scaleY:0.98,y:-1.1},0).wait(1).to({scaleY:0.97,y:-1.5},0).wait(1).to({scaleY:0.97,y:-1.9},0).wait(1).to({scaleY:0.96,y:-2.3},0).wait(1).to({scaleY:0.96,y:-2.7},0).wait(1).to({scaleY:0.95,y:-3.1},0).wait(1).to({scaleY:0.94,y:-3.5},0).wait(1).to({scaleY:0.94,y:-3.9},0).wait(1).to({scaleY:0.93,y:-4.3},0).wait(1).to({scaleY:0.93,y:-4.7},0).wait(1).to({scaleY:0.92,y:-5.1},0).wait(1).to({scaleY:0.91,y:-5.5},0).wait(1).to({scaleY:0.91,y:-5.9},0).wait(1).to({scaleY:0.9,y:-6.4},0).wait(1).to({scaleY:0.9,y:-6.8},0).wait(1).to({scaleY:0.89,y:-7.2},0).wait(1).to({scaleY:0.88,y:-7.6},0).wait(1).to({scaleY:0.88,y:-8},0).wait(1).to({scaleY:0.87,y:-8.5},0).wait(1).to({scaleY:0.87,y:-8.9},0).wait(1).to({scaleY:0.86,y:-9.3},0).wait(1).to({scaleY:0.85,y:-9.8},0).wait(1).to({scaleY:0.85,y:-10.2},0).wait(1).to({scaleY:0.84,y:-10.6},0).wait(1).to({scaleY:0.83,y:-11.1},0).wait(1).to({scaleY:0.83,y:-11.5},0).wait(1).to({scaleY:0.82,y:-12},0).wait(1).to({scaleY:0.82,y:-12.4},0).wait(1).to({scaleY:0.81,y:-12.9},0).wait(1).to({scaleY:0.8,y:-13.3},0).wait(1).to({scaleY:0.8,y:-13.8},0).wait(1).to({scaleY:0.79,y:-14.2},0).wait(1).to({scaleY:0.78,y:-14.7},0).wait(1).to({scaleY:0.78,y:-15.1},0).wait(1).to({scaleY:0.77,y:-15.6},0).wait(1).to({scaleY:0.76,y:-16.1},0).wait(1).to({scaleY:0.76,y:-16.5},0).wait(1).to({scaleY:0.75,y:-17},0).wait(1).to({scaleY:0.74,y:-17.5},0).wait(1).to({scaleY:0.74,y:-17.9},0).wait(1).to({scaleY:0.73,y:-18.4},0).wait(1).to({scaleY:0.72,y:-18.9},0).wait(1).to({scaleY:0.72,y:-19.4},0).wait(1).to({scaleY:0.71,y:-19.9},0).wait(1).to({scaleY:0.7,y:-20.3},0).wait(1).to({scaleY:0.69,y:-20.8},0).wait(1).to({scaleY:0.69,y:-21.3},0).wait(1).to({scaleY:0.68,y:-21.8},0).wait(1).to({scaleY:0.67,y:-22.3},0).wait(1).to({scaleY:0.67,y:-22.8},0).wait(1).to({scaleY:0.66,y:-23.3},0).wait(1).to({scaleY:0.65,y:-23.8},0).wait(1).to({scaleY:0.64,y:-24.3},0).wait(1).to({scaleY:0.64,y:-24.8},0).wait(1).to({scaleY:0.63,y:-25.3},0).wait(1).to({scaleY:0.62,y:-25.8},0).wait(1).to({scaleY:0.62,y:-26.3},0).wait(1).to({scaleY:0.61,y:-26.8},0).wait(1).to({scaleY:0.6,y:-27.3},0).wait(1).to({scaleY:0.59,y:-27.9},0).wait(1).to({scaleY:0.59,y:-28.4},0).wait(1).to({scaleY:0.58,y:-28.9},0).wait(1).to({scaleY:0.57,y:-29.4},0).wait(1).to({scaleY:0.56,y:-29.9},0).wait(1).to({scaleY:0.56,y:-30.5},0).wait(1).to({scaleY:0.55,y:-31},0).wait(1).to({scaleY:0.54,y:-31.5},0).wait(1).to({scaleY:0.53,y:-32.1},0).wait(1).to({scaleY:0.52,y:-32.6},0).wait(1).to({scaleY:0.52,y:-33.1},0).wait(1).to({scaleY:0.51,y:-33.7},0).wait(1).to({scaleY:0.5,y:-34.2},0).wait(1).to({scaleY:0.49,y:-34.8},0).wait(1).to({scaleY:0.49,y:-35.3},0).wait(1).to({scaleY:0.48,y:-35.9},0).wait(1).to({scaleY:0.47,y:-36.4},0).wait(1).to({scaleY:0.46,y:-37},0).wait(1).to({scaleY:0.45,y:-37.5},0).wait(1).to({scaleY:0.45,y:-38.1},0).wait(1).to({scaleY:0.44,y:-38.6},0).wait(1).to({scaleY:0.43,y:-39.2},0).wait(1).to({scaleY:0.42,y:-39.8},0).wait(1).to({scaleY:0.41,y:-40.3},0).wait(1).to({scaleY:0.41,y:-40.9},0).wait(1).to({scaleY:0.4,y:-41.5},0).wait(1).to({scaleY:0.39,y:-42},0).wait(1).to({scaleY:0.38,y:-42.6},0).wait(1).to({scaleY:0.37,y:-43.2},0).wait(1).to({scaleY:0.36,y:-43.8},0).wait(1).to({scaleY:0.36,y:-44.3},0).wait(1).to({scaleY:0.35,y:-44.9},0).wait(1).to({scaleY:0.34,y:-45.5},0).wait(1).to({scaleY:0.33,y:-46.1},0).wait(1).to({scaleY:0.32,y:-46.7},0).wait(1).to({scaleY:0.31,y:-47.3},0).wait(1).to({scaleY:0.3,y:-47.9},0).wait(1).to({scaleY:0.3,y:-48.5},0).wait(1).to({scaleY:0.29,y:-49.1},0).wait(1).to({scaleY:0.28,y:-49.7},0).wait(1).to({scaleY:0.27,y:-50.3},0).wait(1).to({scaleY:0.26,y:-50.9},0).wait(1).to({scaleY:0.25,y:-51.5},0).wait(1).to({scaleY:0.24,y:-52.1},0).wait(1).to({scaleY:0.23,y:-52.7},0).wait(1).to({scaleY:0.23,y:-53.3},0).wait(1).to({scaleY:0.22,y:-53.9},0).wait(1).to({scaleY:0.21,y:-54.6},0).wait(1).to({scaleY:0.2,y:-55.2},0).wait(1).to({scaleY:0.19,y:-55.8},0).wait(1).to({scaleY:0.18,y:-56.4},0).wait(1).to({scaleY:0.17,y:-57},0).wait(1).to({scaleY:0.16,y:-57.7},0).wait(1).to({scaleY:0.15,y:-58.3},0).wait(1).to({scaleY:0.14,y:-58.9},0).wait(1).to({regY:0,scaleY:0.14,y:-69},0).wait(1).to({regY:69.4,y:-59.4},0).wait(215).to({regY:0,scaleY:0.14,y:-69},0).wait(1).to({regY:69.4,scaleY:0.16,y:-57.7},0).wait(1).to({scaleY:0.18,y:-56.5},0).wait(1).to({scaleY:0.2,y:-55.3},0).wait(1).to({scaleY:0.21,y:-54.1},0).wait(1).to({scaleY:0.23,y:-53},0).wait(1).to({scaleY:0.25,y:-51.8},0).wait(1).to({scaleY:0.26,y:-50.6},0).wait(1).to({scaleY:0.28,y:-49.5},0).wait(1).to({scaleY:0.3,y:-48.3},0).wait(1).to({scaleY:0.31,y:-47.2},0).wait(1).to({scaleY:0.33,y:-46},0).wait(1).to({scaleY:0.35,y:-44.9},0).wait(1).to({scaleY:0.36,y:-43.8},0).wait(1).to({scaleY:0.38,y:-42.7},0).wait(1).to({scaleY:0.4,y:-41.6},0).wait(1).to({scaleY:0.41,y:-40.5},0).wait(1).to({scaleY:0.43,y:-39.4},0).wait(1).to({scaleY:0.44,y:-38.3},0).wait(1).to({scaleY:0.46,y:-37.3},0).wait(1).to({scaleY:0.47,y:-36.2},0).wait(1).to({scaleY:0.49,y:-35.2},0).wait(1).to({scaleY:0.5,y:-34.1},0).wait(1).to({scaleY:0.52,y:-33.1},0).wait(1).to({scaleY:0.53,y:-32},0).wait(1).to({scaleY:0.55,y:-31},0).wait(1).to({scaleY:0.56,y:-30},0).wait(1).to({scaleY:0.58,y:-29},0).wait(1).to({scaleY:0.59,y:-28},0).wait(1).to({scaleY:0.61,y:-27},0).wait(1).to({scaleY:0.62,y:-26},0).wait(1).to({scaleY:0.63,y:-25.1},0).wait(1).to({scaleY:0.65,y:-24.1},0).wait(1).to({scaleY:0.66,y:-23.1},0).wait(1).to({scaleY:0.67,y:-22.2},0).wait(1).to({scaleY:0.69,y:-21.2},0).wait(1).to({scaleY:0.7,y:-20.3},0).wait(1).to({scaleY:0.71,y:-19.4},0).wait(1).to({scaleY:0.73,y:-18.5},0).wait(1).to({scaleY:0.74,y:-17.6},0).wait(1).to({scaleY:0.75,y:-16.7},0).wait(1).to({scaleY:0.77,y:-15.8},0).wait(1).to({scaleY:0.78,y:-14.9},0).wait(1).to({scaleY:0.79,y:-14},0).wait(1).to({scaleY:0.81,y:-13.1},0).wait(1).to({scaleY:0.82,y:-12.3},0).wait(1).to({scaleY:0.83,y:-11.4},0).wait(1).to({scaleY:0.84,y:-10.6},0).wait(1).to({scaleY:0.85,y:-9.7},0).wait(1).to({scaleY:0.87,y:-8.9},0).wait(1).to({scaleY:0.88,y:-8.1},0).wait(1).to({scaleY:0.89,y:-7.3},0).wait(1).to({scaleY:0.9,y:-6.5},0).wait(1).to({scaleY:0.91,y:-5.7},0).wait(1).to({scaleY:0.92,y:-4.9},0).wait(1).to({scaleY:0.94,y:-4.1},0).wait(1).to({scaleY:0.95,y:-3.3},0).wait(1).to({scaleY:0.96,y:-2.6},0).wait(1).to({scaleY:0.97,y:-1.8},0).wait(1).to({scaleY:0.98,y:-1.1},0).wait(1).to({scaleY:0.99,y:-0.3},0).wait(1).to({scaleY:1,y:0.4},0).wait(1));

	// Disposed Shit
	this.instance_6 = new lib.DisposedShit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54,-57,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(417).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.8,-69.3,434,146);


// stage content:
(lib.TheShitATMV2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// InteractiveAnimation
	this.InteractiveAnimation = new lib.InteractiveAnimation();
	this.InteractiveAnimation.parent = this;
	this.InteractiveAnimation.setTransform(616.1,343.4);

	this.timeline.addTween(cjs.Tween.get(this.InteractiveAnimation).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,250,800.2,500.2);
// library properties:
lib.properties = {
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Background.png", id:"Background"},
		{src:"images/BlackShit.png", id:"BlackShit"},
		{src:"images/CollectionDoor.png", id:"CollectionDoor"},
		{src:"images/DisabledShit.png", id:"DisabledShit"},
		{src:"images/DisposalInProgress.png", id:"DisposalInProgress"},
		{src:"images/DisposedShit.png", id:"DisposedShit"},
		{src:"images/EnjoyYourShit.png", id:"EnjoyYourShit"},
		{src:"images/FeministShit.png", id:"FeministShit"},
		{src:"images/LGBTQShit.png", id:"LGBTQShit"},
		{src:"images/MuslimShit.png", id:"MuslimShit"},
		{src:"images/No.png", id:"No"},
		{src:"images/Oops.png", id:"Oops"},
		{src:"images/Start.png", id:"Start"},
		{src:"images/Surprise.png", id:"Surprise"},
		{src:"images/TryADifferentShit.png", id:"TryADifferentShit"},
		{src:"images/WhiteShit.png", id:"WhiteShit"},
		{src:"images/Yes.png", id:"Yes"},
		{src:"sounds/MusicTheme.mp3", id:"MusicTheme"},
		{src:"sounds/EndingMusic.mp3", id:"EndingMusic"},
		{src:"sounds/MusicTheme2.mp3", id:"MusicTheme2"},
		{src:"sounds/ButtonSound.mp3", id:"ButtonSound"},
		{src:"sounds/RevealSound.mp3", id:"RevealSound"},
		{src:"sounds/PoopingSound.mp3", id:"PoopingSound"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;