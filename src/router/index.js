import Vue from 'vue'
import Router from 'vue-router'
 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index",
      name: 'home',
      component: resolve => require(['../components/views/home.vue'], resolve),
      children:[
        {
          path: '/index',
          name: 'index',
          component: resolve => require(['../components/views/index.vue'], resolve),
          
        },
        {
          path: '/brand',
          name: 'brand',
          component: resolve => require(['../components/views/brand.vue'], resolve)
        },
        {
          path: '/product',
          name: 'product',
          component: resolve => require(['../components/views/product.vue'], resolve)
        }
        ,
        {
          path: '/pdesk',
          name: 'pdesk',
          component: resolve => require(['../components/views/pdesk.vue'], resolve)
        }
        ,
        {
          path: '/peducation',
          name: 'peducation',
          component: resolve => require(['../components/views/peducation.vue'], resolve)
        }
        ,
        {
          path: '/pmove',
          name: 'pmove',
          component: resolve => require(['../components/views/pmove.vue'], resolve)
        }
        ,
        {
          path: '/pos',
          name: 'pos',
          component: resolve => require(['../components/views/pos.vue'], resolve)
        }
        ,
        {
          path: '/poutdoor',
          name: 'poutdoor',
          component: resolve => require(['../components/views/poutdoor.vue'], resolve)
        }
        ,
        {
          path: '/product',
          name: 'product',
          component: resolve => require(['../components/views/product.vue'], resolve)
        }
        ,
        {
          path: '/psoft',
          name: 'psoft',
          component: resolve => require(['../components/views/psoft.vue'], resolve)
        }
        ,
        {
          path: '/pspace',
          name: 'pspace',
          component: resolve => require(['../components/views/pspace.vue'], resolve)
        }
        ,
        {
          path: '/pstore',
          name: 'pstore',
          component: resolve => require(['../components/views/pstore.vue'], resolve)
        }
        
        ,
        {
          path: '/case',
          name: 'case',
          component: resolve => require(['../components/views/case.vue'], resolve)
        }
        ,
        {
          path: '/space',
          name: 'space',
          component: resolve => require(['../components/views/space.vue'], resolve)
        }
        ,
        {
          path: '/about',
          name: 'about',
          component: resolve => require(['../components/views/about.vue'], resolve)
        }
        ,
        {
          path: '/liaison',
          name: 'liaison',
          component: resolve => require(['../components/views/liaison.vue'], resolve)
        }
        ,
        {
          path: '/casesubitem',
          name: 'casesubitem',
          component: resolve => require(['../components/commonItems/casesubitem.vue'], resolve)
        }
        ,
        {
          path: '/brandsubitem',
          name: 'brandsubitem',
          component: resolve => require(['../components/commonItems/brandsubitem.vue'], resolve)
        }
        ,
        {
          path: '/Masterpieces',
          name: 'Masterpieces',
          component: resolve => require(['../components/commonItems/spacelist/Masterpieces.vue'], resolve)
        }
        ,
//os
        {
          path: '/Joyn',
          name: 'Joyn',
          component: resolve => require(['../components/commonItems/productlist/Joyn.vue'], resolve)
        }
        ,
//chair
        {
          path: '/AC5',
          name: 'AC5',
          component: resolve => require(['../components/commonItems/ac5.vue'], resolve)
        }
        ,
        {
          path: '/GrandExecutive',
          name: 'GrandExecutive',
          component: resolve => require(['../components/commonItems/GrandExecutive.vue'], resolve)
        }
        ,
        {
          path: '/IdMesh',
          name: 'IdMesh',
          component: resolve => require(['../components/commonItems/IdMesh.vue'], resolve)
        }
        ,
        {
          path: '/IdTrim',
          name: 'IdTrim',
          component: resolve => require(['../components/commonItems/IdTrim.vue'], resolve)
        }
        ,
        {
          path: '/PacificChair',
          name: 'PacificChair',
          component: resolve => require(['../components/commonItems/PacificChair.vue'], resolve)
        }
        ,
        {
          path: '/Rookie',
          name: 'Rookie',
          component: resolve => require(['../components/commonItems/Rookie.vue'], resolve)
        }
        ,
        {
          path: '/Softshell',
          name: 'Softshell',
          component: resolve => require(['../components/commonItems/Softshell.vue'], resolve)
        }
        ,
        {
          path: '/StoolTool',
          name: 'StoolTool',
          component: resolve => require(['../components/commonItems/StoolTool.vue'], resolve)
        }
        ,
        {
          path: '/TipTon',
          name: 'TipTon',
          component: resolve => require(['../components/commonItems/TipTon.vue'], resolve)
        }
        ,
        {
          path: '/Silver',
          name: 'Silver',
          component: resolve => require(['../components/commonItems/productlist/Silver.vue'], resolve)
        }
        ,
        {
          path: '/Flx',
          name: 'Flx',
          component: resolve => require(['../components/commonItems/productlist/Flx.vue'], resolve)
        }
        ,
        {
          path: '/Mercury',
          name: 'Mercury',
          component: resolve => require(['../components/commonItems/productlist/Mercury.vue'], resolve)
        }
        ,
        {
          path: '/Physix',
          name: 'Physix',
          component: resolve => require(['../components/commonItems/productlist/Physix.vue'], resolve)
        }
        ,
        {
          path: '/Pro',
          name: 'Pro',
          component: resolve => require(['../components/commonItems/productlist/Pro.vue'], resolve)
        }
        ,
        {
          path: '/Vintage',
          name: 'Vintage',
          component: resolve => require(['../components/commonItems/productlist/Vintage.vue'], resolve)
        }
        ,
        {
          path: '/HChair',
          name: 'HChair',
          component: resolve => require(['../components/commonItems/productlist/HChair.vue'], resolve)
        }
        ,
        {
          path: '/Axos',
          name: 'Axos',
          component: resolve => require(['../components/commonItems/productlist/Axos.vue'], resolve)
        }
        ,
        {
          path: '/Oxford',
          name: 'Oxford',
          component: resolve => require(['../components/commonItems/productlist/Oxford.vue'], resolve)
        }
        ,
        {
          path: '/Pengus',
          name: 'Pengus',
          component: resolve => require(['../components/commonItems/productlist/Pengus.vue'], resolve)
        }
        ,
        {
          path: '/Arco',
          name: 'Arco',
          component: resolve => require(['../components/commonItems/productlist/Arco.vue'], resolve)
        }
        ,
        {
          path: '/MatchExcutive',
          name: 'MatchExcutive',
          component: resolve => require(['../components/commonItems/productlist/MatchExcutive.vue'], resolve)
        }
        ,
        {
          path: '/Pure',
          name: 'Pure',
          component: resolve => require(['../components/commonItems/productlist/Pure.vue'], resolve)
        }
        ,
        {
          path: '/Match',
          name: 'Match',
          component: resolve => require(['../components/commonItems/productlist/Match.vue'], resolve)
        }
        ,
 // desk    
        {
          path: '/medamorph',
          name: 'medamorph',
          component: resolve => require(['../components/commonItems/medamorph.vue'], resolve)
        }
        ,
        {
          path: '/BeConn',
          name: 'BeConn',
          component: resolve => require(['../components/commonItems/BeConn.vue'], resolve)
        }
        ,
        {
          path: '/Shine',
          name: 'Shine',
          component: resolve => require(['../components/commonItems/Shine.vue'], resolve)
        }
        ,
        {
          path: '/workbays',
          name: 'workbays',
          component: resolve => require(['../components/commonItems/workbays.vue'], resolve)
        }
        ,
        {
          path: '/Align',
          name: 'Align',
          component: resolve => require(['../components/commonItems/Align.vue'], resolve)
        }
        ,
        {
          path: '/Puppy',
          name: 'Puppy',
          component: resolve => require(['../components/commonItems/Puppy.vue'], resolve)
        }
        ,
        {
          path: '/Rocky',
          name: 'Rocky',
          component: resolve => require(['../components/commonItems/Rocky.vue'], resolve)
        }
        ,
        {
          path: '/TiTi',
          name: 'TiTi',
          component: resolve => require(['../components/commonItems/TiTi.vue'], resolve)
        }
        ,
        {
          path: '/MapTable',
          name: 'MapTable',
          component: resolve => require(['../components/commonItems/productlist/MapTable.vue'], resolve)
        }
        ,
        {
          path: '/Glide',
          name: 'Glide',
          component: resolve => require(['../components/commonItems/productlist/Glide.vue'], resolve)
        }
        ,
// outdoor
        {
          path: '/Flat',
          name: 'Flat',
          component: resolve => require(['../components/commonItems/Flat.vue'], resolve)
       }
       ,
       {
          path: '/Solanas',
          name: 'Solanas',
          component: resolve => require(['../components/commonItems/Solanas.vue'], resolve)
       }
       ,
       {
          path: '/NaoNao',
          name: 'NaoNao',
          component: resolve => require(['../components/commonItems/productlist/NaoNao.vue'], resolve)
       }
       ,
       {
          path: '/Stack',
          name: 'Stack',
          component: resolve => require(['../components/commonItems/productlist/Stack.vue'], resolve)
       }
       ,
       {
          path: '/Sahara',
          name: 'Sahara',
          component: resolve => require(['../components/commonItems/productlist/Sahara.vue'], resolve)
       }
       ,
       {
          path: '/Bali',
          name: 'Bali',
          component: resolve => require(['../components/commonItems/productlist/Bali.vue'], resolve)
       }
       ,
//  soft
       {
          path: '/MangasOrigina',
          name: 'MangasOrigina',
          component: resolve => require(['../components/commonItems/MangasOrigina.vue'], resolve)
       }
       ,
       {
          path: '/Silai',
          name: 'Silai',
          component: resolve => require(['../components/commonItems/Silai.vue'], resolve)
       }
       ,
       {
          path: '/CanevasGeo',
          name: 'CanevasGeo',
          component: resolve => require(['../components/commonItems/productlist/CanevasGeo.vue'], resolve)
       }
       ,
       {
          path: '/MixMatch',
          name: 'MixMatch',
          component: resolve => require(['../components/commonItems/productlist/MixMatch.vue'], resolve)
       }
       ,
//  space
       {
          path: '/Algue',
          name: 'Algue',
          component: resolve => require(['../components/commonItems/Algue.vue'], resolve)
       }
       ,
       {
          path: '/Clouds',
          name: 'Clouds',
          component: resolve => require(['../components/commonItems/Clouds.vue'], resolve)
       }
       ,
       {
          path: '/Pop',
          name: 'Pop',
          component: resolve => require(['../components/commonItems/productlist/Pop.vue'], resolve)
       }
       ,
       {
          path: '/Uni',
          name: 'Uni',
          component: resolve => require(['../components/commonItems/productlist/Uni.vue'], resolve)
       }
       ,
//  store
       {
          path: '/360',
          name: '360',
          component: resolve => require(['../components/commonItems/360.vue'], resolve)
       }
       ,
       {
          path: '/FollowMe',
          name: 'FollowMe',
          component: resolve => require(['../components/commonItems/FollowMe.vue'], resolve)
       }
       ,
        {
          path: '/Caddy',
          name: 'Caddy',
          component: resolve => require(['../components/commonItems/productlist/Caddy.vue'], resolve)
        }
        ,
        {
          path: '/CK',
          name: 'CK',
          component: resolve => require(['../components/commonItems/productlist/CK.vue'], resolve)
        }
        ,
//  education  
        {
          path: '/Dodo',
          name: 'Dodo',
          component: resolve => require(['../components/commonItems/productlist/Dodo.vue'], resolve)
        }
        ,     
        {
          path: '/Funktus',
          name: 'Funktus',
          component: resolve => require(['../components/commonItems/productlist/Funktus.vue'], resolve)
        }
        ,    
        {
          path: '/HappyBird',
          name: 'HappyBird',
          component: resolve => require(['../components/commonItems/productlist/HappyBird.vue'], resolve)
        }
        ,   
        {
          path: '/Julian',
          name: 'Julian',
          component: resolve => require(['../components/commonItems/productlist/Julian.vue'], resolve)
        }
        , 
        {
          path: '/Nido',
          name: 'Nido',
          component: resolve => require(['../components/commonItems/productlist/Nido.vue'], resolve)
        }
        ,  
        {
          path: '/Pingy',
          name: 'Pingy',
          component: resolve => require(['../components/commonItems/productlist/Pingy.vue'], resolve)
        }
        , 
        {
          path: '/Alma',
          name: 'Alma',
          component: resolve => require(['../components/commonItems/productlist/Alma.vue'], resolve)
        }
        , 
        {
          path: '/Shirlly',
          name: 'Shirlly',
          component: resolve => require(['../components/commonItems/productlist/Shirlly.vue'], resolve)
        }
        , 
       {
          path: '/Trioli',
          name: 'Trioli',
          component: resolve => require(['../components/commonItems/productlist/Trioli.vue'], resolve)
       }
       ,
       {
          path: '/LittleFlare',
          name: 'LittleFlare',
          component: resolve => require(['../components/commonItems/productlist/LittleFlare.vue'], resolve)
       }
       ,
       {
          path: '/SeggiolinaPop',
          name: 'SeggiolinaPop',
          component: resolve => require(['../components/commonItems/productlist/SeggiolinaPop.vue'], resolve)
       }
       ,
       {
          path: '/Eur',
          name: 'Eur',
          component: resolve => require(['../components/commonItems/productlist/Eur.vue'], resolve)
       }
       ,
       {
          path: '/ParadiseTree',
          name: 'ParadiseTree',
          component: resolve => require(['../components/commonItems/productlist/ParadiseTree.vue'], resolve)
       }
       ,
//  move
       {
          path: '/egg',
          name: 'egg',
          component: resolve => require(['../components/commonItems/egg.vue'], resolve)
       }
       ,
       {
          path: '/Series7',
          name: 'Series7',
          component: resolve => require(['../components/commonItems/Series7.vue'], resolve)
       }
       ,
       {
          path: '/Drop',
          name: 'Drop',
          component: resolve => require(['../components/commonItems/Drop.vue'], resolve)
       }
       ,
       {
          path: '/Fungus',
          name: 'Fungus',
          component: resolve => require(['../components/commonItems/Fungus.vue'], resolve)
       }
       ,
       {
          path: '/KINETICis5',
          name: 'KINETICis5',
          component: resolve => require(['../components/commonItems/KINETICis5.vue'], resolve)
       }
       ,
       {
          path: '/LittleFriend',
          name: 'LittleFriend',
          component: resolve => require(['../components/commonItems/LittleFriend.vue'], resolve)
       }
       ,
       {
          path: '/NesTable',
          name: 'NesTable',
          component: resolve => require(['../components/commonItems/NesTable.vue'], resolve)
       }
       ,
       {
          path: '/Ola',
          name: 'Ola',
          component: resolve => require(['../components/commonItems/Ola.vue'], resolve)
       }
       ,
       {
          path: '/Alcove',
          name: 'Alcove',
          component: resolve => require(['../components/commonItems/Alcove.vue'], resolve)
       }
       ,
       {
          path: '/SailOurdoorPouf',
          name: 'SailOurdoorPouf',
          component: resolve => require(['../components/commonItems/SailOurdoorPouf.vue'], resolve)
       }
       ,
       {
          path: '/Sequoia',
          name: 'Sequoia',
          component: resolve => require(['../components/commonItems/Sequoia.vue'], resolve)
       }
       ,
       {
          path: '/SoftWork',
          name: 'SoftWork',
          component: resolve => require(['../components/commonItems/SoftWork.vue'], resolve)
       }
       ,
       {
          path: '/Swan',
          name: 'Swan',
          component: resolve => require(['../components/commonItems/Swan.vue'], resolve)
       }
       ,
       {
          path: '/UPis1',
          name: 'UPis1',
          component: resolve => require(['../components/commonItems/UPis1.vue'], resolve)
       }
       ,
       {
          path: '/MamaBear',
          name: 'MamaBear',
          component: resolve => require(['../components/commonItems/productlist/MamaBear.vue'], resolve)
       }
       ,
       {
          path: '/Panton',
          name: 'Panton',
          component: resolve => require(['../components/commonItems/productlist/Panton.vue'], resolve)
       }
       ,
       {
          path: '/Pot',
          name: 'Pot',
          component: resolve => require(['../components/commonItems/productlist/Pot.vue'], resolve)
       }
       ,
       {
          path: '/Wooden',
          name: 'Wooden',
          component: resolve => require(['../components/commonItems/productlist/Wooden.vue'], resolve)
       }
       ,
       {
          path: '/Ship',
          name: 'Ship',
          component: resolve => require(['../components/commonItems/productlist/Ship.vue'], resolve)
       }
       ,
       {
          path: '/Favn',
          name: 'Favn',
          component: resolve => require(['../components/commonItems/productlist/Favn.vue'], resolve)
       }
       ,
       {
          path: '/Grand',
          name: 'Grand',
          component: resolve => require(['../components/commonItems/productlist/Grand.vue'], resolve)
       }
       ,
       {
          path: '/Hug',
          name: 'Hug',
          component: resolve => require(['../components/commonItems/productlist/Hug.vue'], resolve)
       }
       ,
       {
          path: '/PK22',
          name: 'PK22',
          component: resolve => require(['../components/commonItems/productlist/PK22.vue'], resolve)
       }
       ,
       {
          path: '/Plenum',
          name: 'Plenum',
          component: resolve => require(['../components/commonItems/productlist/Plenum.vue'], resolve)
       }
       ,
       {
          path: '/RO',
          name: 'RO',
          component: resolve => require(['../components/commonItems/productlist/RO.vue'], resolve)
       }
       ,
       {
          path: '/PK80',
          name: 'PK80',
          component: resolve => require(['../components/commonItems/productlist/PK80.vue'], resolve)
       }
       ,
       {
          path: '/Ant',
          name: 'Ant',
          component: resolve => require(['../components/commonItems/productlist/Ant.vue'], resolve)
       }
       ,
       {
          path: '/FauteuilDeSalon',
          name: 'FauteuilDeSalon',
          component: resolve => require(['../components/commonItems/productlist/FauteuilDeSalon.vue'], resolve)
       }
       ,
       {
          path: '/FauteuilDirection',
          name: 'FauteuilDirection',
          component: resolve => require(['../components/commonItems/productlist/FauteuilDirection.vue'], resolve)
       }
       ,
       {
          path: '/FauteuilDirectionPivotant',
          name: 'FauteuilDirectionPivotant',
          component: resolve => require(['../components/commonItems/productlist/FauteuilDirectionPivotant.vue'], resolve)
       }
       ,
       {
          path: '/Nap',
          name: 'Nap',
          component: resolve => require(['../components/commonItems/productlist/Nap.vue'], resolve)
       }
       ,
       {
          path: '/Polder',
          name: 'Polder',
          component: resolve => require(['../components/commonItems/productlist/Polder.vue'], resolve)
       }
       ,
       {
          path: '/RuffPouf',
          name: 'RuffPouf',
          component: resolve => require(['../components/commonItems/productlist/RuffPouf.vue'], resolve)
       }
       ,
       {
          path: '/StoolOne',
          name: 'StoolOne',
          component: resolve => require(['../components/commonItems/productlist/StoolOne.vue'], resolve)
       }
       ,
       {
          path: '/Via57',
          name: 'Via57',
          component: resolve => require(['../components/commonItems/productlist/Via57.vue'], resolve)
       }
// 案例
       ,
       {
          path: '/google',
          name: 'google',
          component: resolve => require(['../components/commonItems/caselist/google.vue'], resolve)
       }
       ,
       {
          path: '/amorepacific',
          name: 'amorepacific',
          component: resolve => require(['../components/commonItems/caselist/amorepacific.vue'], resolve)
       }
       ,
       {
          path: '/lmf',
          name: 'lmf',
          component: resolve => require(['../components/commonItems/caselist/lmf.vue'], resolve)
       }
       ,
       {
          path: '/konstanz',
          name: 'konstanz',
          component: resolve => require(['../components/commonItems/caselist/konstanz.vue'], resolve)
       }
       ,
       {
          path: '/lbyy',
          name: 'lbyy',
          component: resolve => require(['../components/commonItems/caselist/lbyy.vue'], resolve)
       }
       ,
       {
          path: '/blwl',
          name: 'blwl',
          component: resolve => require(['../components/commonItems/caselist/blwl.vue'], resolve)
       }
       ,
       {
          path: '/sdc',
          name: 'sdc',
          component: resolve => require(['../components/commonItems/caselist/sdc.vue'], resolve)
       }
       ,
       {
          path: '/adb',
          name: 'adb',
          component: resolve => require(['../components/commonItems/caselist/adb.vue'], resolve)
       }
       ,
       {
          path: '/d',
          name: 'd',
          component: resolve => require(['../components/commonItems/caselist/d.vue'], resolve)
       }
       ,
       {
          path: '/hrdx',
          name: 'hrdx',
          component: resolve => require(['../components/commonItems/caselist/hrdx.vue'], resolve)
       }
       ,
       {
          path: '/lgzj',
          name: 'lgzj',
          component: resolve => require(['../components/commonItems/caselist/lgzj.vue'], resolve)
       }
       ,
       {
          path: '/linkedin',
          name: 'linkedin',
          component: resolve => require(['../components/commonItems/caselist/linkedin.vue'], resolve)
       }
       ,
       {
          path: '/on',
          name: 'on',
          component: resolve => require(['../components/commonItems/caselist/on.vue'], resolve)
       }
       ,
       {
          path: '/zw',
          name: 'zw',
          component: resolve => require(['../components/commonItems/caselist/zw.vue'], resolve)
       }
       ,
       {
          path: '/pwc',
          name: 'pwc',
          component: resolve => require(['../components/commonItems/caselist/pwc.vue'], resolve)
       }
       ,
       {
          path: '/tsl',
          name: 'tsl',
          component: resolve => require(['../components/commonItems/caselist/tsl.vue'], resolve)
       }
       ,
       {
          path: '/yahoo',
          name: 'yahoo',
          component: resolve => require(['../components/commonItems/caselist/yahoo.vue'], resolve)
       }
       ,
       {
          path: '/xwork',
          name: 'xwork',
          component: resolve => require(['../components/commonItems/caselist/xwork.vue'], resolve)
       }
       ,
       {
          path: '/Microsoft',
          name: 'Microsoft',
          component: resolve => require(['../components/commonItems/caselist/Microsoft.vue'], resolve)
       }
       ,
       {
          path: '/rmrb',
          name: 'rmrb',
          component: resolve => require(['../components/commonItems/caselist/rmrb.vue'], resolve)
       }
       ,
       {
          path: '/yc',
          name: 'yc',
          component: resolve => require(['../components/commonItems/caselist/yc.vue'], resolve)
       }
       ,
       {
          path: '/cmr',
          name: 'cmr',
          component: resolve => require(['../components/commonItems/caselist/cmr.vue'], resolve)
       }
       ,
       {
          path: '/hpa',
          name: 'hpa',
          component: resolve => require(['../components/commonItems/caselist/hpa.vue'], resolve)
       }
       ,
       {
          path: '/sas',
          name: 'sas',
          component: resolve => require(['../components/commonItems/caselist/sas.vue'], resolve)
       }
      ]
    },
    
  ]
})
