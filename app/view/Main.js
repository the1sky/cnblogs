Ext.define('cnblogs.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',


    requires: [
        'Ext.TitleBar',
        'cnblogs.store.feedlist',
        'Ext.plugin.ListPaging'



    ],
    config: {
        layout:'fit'
    },

    initialize:function(){

        var head={
            docked: 'top',
            xtype: 'toolbar',
            title: '博客园-首页',
            items:[
                {
                    xtype:'button',
                    text:'新闻',
                    id:'newsbutton'
                    /*
                     ,
                     handler:
                     function(){
                     //history.back();
                     // alert('- -');
                     Ext.app.Application.redirectTo("newspage");
                     return;
                     if(Ext.Viewport.newslist==undefined)
                     {
                     Ext.Viewport.newslist=Ext.create('cnblogs.view.newslist');
                     }

                     Ext.Viewport.setActiveItem(Ext.Viewport.newslist);
                     }
                     */

                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype:'button',
                    text:'分类阅读',
                    id:'classbutton'
                }
            ]
        };
        var foot={
            docked: 'bottom',
            xtype: 'toolbar',
            title: '代码改变世界',
            items:[
                {
                    xtype:'button',
                    text:'新闻',
                    id:'newsbutton'
                    /*
                    ,
                    handler:
                        function(){
                            //history.back();
                            // alert('- -');
                            Ext.app.Application.redirectTo("newspage");
                            return;
                            if(Ext.Viewport.newslist==undefined)
                            {
                                Ext.Viewport.newslist=Ext.create('cnblogs.view.newslist');
                            }

                            Ext.Viewport.setActiveItem(Ext.Viewport.newslist);
                        }
*/

                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype:'button',
                    text:'分类阅读',
                    id:'classbutton'
                }
            ]
        };
        var feedlist={
            xtype:'list',
            itemTpl:'<div class="tweet"><span class="posted">@{author}</span><h2>{title}</h2><p>{contentSnippet}</p></div>',
            store: Ext.create("cnblogs.store.feedlist"),
            id:'feedlist',
            /*
            listeners:{
              itemtap:function( obj, index, target, record, e, eOpts ){
                  console.log('feedlist itemtap');
                  //这里直接做页面跳转吧
                  //var view = Ext.create('cnblogs.view.blogsinfo');

                  if(Ext.Viewport.blogsinfo==undefined )
                  {
                      Ext.Viewport.blogsinfo = Ext.create('cnblogs.view.blogsinfo');
                      Ext.Viewport.add(Ext.Viewport.blogsinfo);
                  }
                  Ext.Viewport.blogsinfo.setRecord(record);

                  Ext.Viewport.setActiveItem('blogsinfo');


              }
            },
            */
            plugins: [
                {
                    xclass: 'Ext.plugin.ListPaging',
                    autoPaging: true
                }
            ]

          }

        this.add([head,feedlist]);




    }
});
