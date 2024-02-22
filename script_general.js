(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scripts":{"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"initAnalytics":TDV.Tour.Script.initAnalytics,"clone":TDV.Tour.Script.clone,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"init":TDV.Tour.Script.init,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"mixObject":TDV.Tour.Script.mixObject,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"downloadFile":TDV.Tour.Script.downloadFile,"cloneBindings":TDV.Tour.Script.cloneBindings,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isPanorama":TDV.Tour.Script.isPanorama,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startMeasurement":TDV.Tour.Script.startMeasurement,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"createTween":TDV.Tour.Script.createTween,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"existsKey":TDV.Tour.Script.existsKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"openLink":TDV.Tour.Script.openLink,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow},"scrollBarMargin":2,"start":"this.init()","data":{"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt","pt-PT":"locale/pt-PT.txt"},"history":{},"name":"Player95676"},"creationPolicy":"inAdvance","left":354.15,"propagateClick":false,"children":["this.MainViewer","this.Container_F7EC2801_F9CB_D535_41AA_C67CF1B34CEC"],"height":"100%","width":"100%","hash": "fae4bf1d3ab52e02594d9ce148b9539b8707bcdf5f95a5e141a1e3e9f112a1e5", "definitions": [{"id":"Container_F7EC2801_F9CB_D535_41AA_C67CF1B34CEC","left":"0%","data":{"name":"Container199586"},"creationPolicy":"inAdvance","scrollBarMargin":2,"children":["this.Image_F7CDE2B2_F9C9_B557_41E7_D12CA6FA23E7"],"gap":10,"propagateClick":false,"height":"99.79%","scrollBarColor":"#000000","width":"100%","verticalAlign":"middle","layout":"horizontal","horizontalAlign":"center","overflow":"scroll","backgroundColorRatios":[1],"backgroundColor":["#FFFFFF"],"class":"Container","minWidth":20,"top":"0.21%","minHeight":20},{"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","aaEnabled":true},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029","camera":"this.panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList"},{"verticalAlign":"middle","backgroundOpacity":0,"data":{"name":"Image199921"},"height":"20.491%","propagateClick":false,"scaleMode":"fit_inside","width":"33.018%","url":trans('Image_F7CDE2B2_F9C9_B557_41E7_D12CA6FA23E7.url'),"horizontalAlign":"center","id":"Image_F7CDE2B2_F9C9_B557_41E7_D12CA6FA23E7","minHeight":1,"class":"Image","minWidth":1},{"progressBottom":10,"playbackBarProgressBorderRadius":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"firstTransitionDuration":0,"toolTipFontColor":"#606060","data":{"name":"Main Viewer"},"playbackBarHeadHeight":15,"playbackBarLeft":0,"minWidth":100,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"toolTipBorderColor":"#767676","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressHeight":2,"toolTipTextShadowColor":"#000000","progressBorderSize":0,"progressBackgroundColorRatios":[0],"propagateClick":false,"progressBarBorderRadius":2,"playbackBarHeadShadowColor":"#000000","height":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","progressOpacity":0.7,"progressRight":"33%","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"width":"100%","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"id":"MainViewer","playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"toolTipShadowColor":"#333138","progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","toolTipPaddingBottom":4,"subtitlesTop":0,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadWidth":6,"progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesGap":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"toolTipFontSize":"1.11vmin","subtitlesBackgroundColor":"#000000","progressLeft":"33%","subtitlesTextShadowColor":"#000000","minHeight":50,"playbackBarHeadShadowBlurRadius":3},{"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1024,"rowCount":2,"colCount":12,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"rowCount":1,"colCount":6,"width":3072}]}}],"thumbnailUrl":"media/panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_t.jpg","hfovMin":"150%","vfov":180,"label":trans('panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029.label'),"hfovMax":130,"class":"Panorama","id":"panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029","data":{"label":"FUNDO"}},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_9FF1B1F6_F4CD_0EC1_41E8_E144773BE029_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_AEB4BA10_F4CD_1D41_41DC_31C1C4E69231"},{"class":"PanoramaCameraSequence","id":"sequence_AEB4BA10_F4CD_1D41_41DC_31C1C4E69231","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]}],"scrollBarColor":"#000000","gap":10,"layout":"absolute","downloadEnabled":true,"backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","class":"Player","minWidth":0,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.7.js.map
})();
//Generated with v2023.2.7, Tue Feb 20 2024