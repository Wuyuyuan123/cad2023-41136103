var tipuesearch = {"pages": [{'title': '關於', 'text': 'https://github.com/mdecycu/cmsit \n 歡迎來到芋圓的網站 \n \n', 'tags': '', 'url': '關於.html'}, {'title': '家庭作業', 'text': '', 'tags': '', 'url': '家庭作業.html'}, {'title': '任務', 'text': '', 'tags': '', 'url': '任務.html'}, {'title': '1. solid edge', 'text': '因為老師分3人一小組，9人一大組要大家分工合作一起利用7個繪圖軟體設計繪圖，然後製作簡報。所以讓我因緣際會分配到了solid edge 這個軟體，故我現在執行任務的首要任務是了解 solid edge\xa0是什麼? \n \n \n \n Solid Edge 是一個包含多款經濟易用的軟體工具的產品組合，可解決產品開發過程的各種問題。 Solid Edge 通過同步建模技術，將直接建模的快速和簡易性與參數化設計的靈活性和可控性相結合。 Solid Edge 按照您要求提交支援雲的設計Solid Edge 提供您需要的雲功能，方便您在不同設備上存取專業 3D CAD，按照您的個人喜好設定即時組態 CAD 環境，並在設計資源以及供應商和客戶之間快速共用資料。 支援雲的 Solid Edge 降低了對 IT 支援的需求。 讓他們騰出更多的時間處理生產效率更高的專案，而不是日常系統維護。 對於需要在辦公室、工廠現場和外出拜訪供應商或客戶時全程掌握設計專案資訊的設計師而言，近年來平板設備的發展令其受益頗多。 \n \n \n \xa0 1.載\xa0 solid edge 這個軟體，去 這個 網站載。 \n \xa02. 學習\xa0 solid edge \xa0這個軟體的指令及操作，觀看 這個 影片。 \n', 'tags': '', 'url': '1. solid edge.html'}, {'title': '2.利用\xa0Solid Edge 繪圖永動機模擬器的零組件', 'text': '1.設計繪圖: \n \n \n 2.\xa0 以下是參考onshape Perpetual Motion Simulator 並且使用Solid Edge所畫 \n 組合圖: \n \n 零件 \n 1.軌道 \n \n 2.塔座 \n \n 3.底座 \n \n 以上是我41136103吳裕源及另一位組員伙伴4112321柯程桂於2013/10/23一同繪製。 \n 心得: \n 1.使用者操作性：Solid Edge相對而言比較繪圖，螢幕佈局清晰，功能區分明顯，使初學者也能比較快速地在地上手學習。 \n 2.建模功能：軟體提供了豐富的建模工具和功能，如實體建模、曲面建模、組裝設計等，可以滿足各種不同的設計需求。 \n 3.多種建模方式：Solid Edge支援同步建模和傳統特徵建模，使用者可以根據自己的喜好和專案需求選擇合適的建模方式。 \n 以上這三點是我們利用 Solid Edge 這個軟體繪圖中所得出的使用心得。   \n \xa0簡報製作: \n \xa0 \xa0 \xa0 這個 是我們製作的簡報。 \n', 'tags': '', 'url': '2.利用\xa0Solid Edge 繪圖永動機模擬器的零組件.html'}, {'title': '任務一', 'text': '', 'tags': '', 'url': '任務一.html'}, {'title': '磁力吸引', 'text': '有關磁力吸引的鋼球循環運動系統, 請參考 這個影片 . \n 模擬原理: \n Perpetual Motion Simulator 主要的電路設計包含右側軌道下方的電磁鐵, 通電後可產生一定大小的磁吸力, 當圓形鐵球循著軌道由平台孔洞往下滾動, 經過軌道下方近接感測器 (Proximity sensor) 時 (距離 3mm-5mm), 透過感應, 控制電路將會短暫啟動電磁鐵 (10 miliseconds), 促使圓形鐵球加速滾動, 其磁力大小約略與圓形鐵球距離的平方成反比 ( Computational Electromagnetics , 磁場模擬 ). \xa0 \n 因此圓形鐵球除了從平台高度落下時, 將位能轉換為動能外, 與軌道滾動磨擦以及空氣阻力所損耗的運動能, 將額外由電磁鐵開關間所得到的磁力吸引能量進行加速, 以便取得足夠的動能在脫離軌道末端後, 重新回到圓形平台. \n \n 電磁力未啟動下的 perpetual motion simulator CoppeliaSim 場景模擬: \n \n Images and part files in Onshape (STL file import into CoppeliaSim 尺寸由 mm 放大10 倍至 cm, 且 z 軸向上, 場景中圓球直徑為 12.825 cm, 平台圓孔直徑為 20 cm) \xa0 \n \n', 'tags': '', 'url': '磁力吸引.html'}, {'title': 'magnet', 'text': '利用 Lua 模擬磁力的程式碼: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n 123 \n 124 \n 125 \n 126 \n \n \n \n function   sysCall_init() \n \xa0 \n -- This line defines the beginning of a function called sysCall_init(). This function is a special callback function in CoppeliaSim that gets called once when the simulation starts. \n \xa0 \n \xa0\xa0\xa0\xa0 sensor = sim.getObject( \'./sensor\' ) \n \xa0 \n -- In this line, the script is getting a reference to an object named "sensor" in the simulation scene. This object is expected to exist within the same hierarchy as the script. \n \xa0 \n \xa0\xa0\xa0\xa0 shape = sim.getObject( \'.\' ) \n \xa0 \n -- Here, the script is getting a reference to the object where the script is attached. The dot . represents the current object. \n \xa0 \n \xa0\xa0\xa0\xa0 sim.setObjectInt32Param(shape, sim.shapeintparam_static, 0) \n \xa0 \n -- This line is setting an integer parameter for the "shape" object. Specifically, it\'s setting the sim.shapeintparam_static parameter to 0. This means that the "shape" object is initially not considered as a static object. \n \xa0 \n \xa0\xa0\xa0\xa0 nominalForce = 0.001 \n \xa0 \n -- This line sets a variable nominalForce to a value of 0.001. It appears to represent a constant force value used in the script. \n \xa0 \n \xa0\xa0\xa0\xa0 enabled =  true \n \xa0 \n -- This line initializes a boolean variable enabled to true. This variable seems to control whether the script should apply forces or not. \n \xa0 \n \xa0\xa0\xa0\xa0 previousPos = sim.getObjectPosition(shape, sim.handle_world) \n \xa0 \n -- Here, the script is getting the initial position of the "shape" object in the world coordinate system and storing it in the previousPos variable. This will be used later for checking if the object has moved. \n \xa0 \n -- The sysCall_init function sets up initial parameters and conditions for the script. It\'s executed once at the beginning of the simulation. \n \xa0 \n -- Now, let\'s move on to the sysCall_actuation function: \n \xa0 \n function   sysCall_actuation() \n \xa0 \n -- This line defines the beginning of another special callback function in CoppeliaSim called sysCall_actuation(). This function gets called repeatedly during the simulation to perform actions in each time step. \n \xa0 \n \xa0\xa0\xa0\xa0 if   enabled  then \n \xa0 \n -- This line checks if the enabled variable is true. If it\'s true, it means the script should apply forces. If it\'s false, the script won\'t apply any forces. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   r, dist, pt, obj = sim.handleProximitySensor(sensor) \n \xa0 \n -- Here, the script is using the sim.handleProximitySensor function to check if the proximity sensor (defined earlier as "sensor") is detecting any objects nearby. It returns information about the detected object. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   r > 0  then \n \xa0 \n -- This line checks if r (the return value of the proximity sensor function) is greater than 0. If it is, it means the sensor has detected an object nearby. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dist = dist + 0.02 \n \xa0 \n -- This line adds an offset of 0.02 to the dist variable. This offset is added to prevent an infinite force when objects are in direct contact. It\'s a safety measure. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   force = nominalForce / (dist * dist) \n \xa0 \n -- Here, the script calculates the force to be applied based on the nominalForce and the squared distance (dist) between the object and the detected object. This seems to be a simple inverse square law force calculation. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   m = sim.getObjectMatrix(shape, sim.handle_world) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m[4] = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m[8] = 0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m[12] = 0 \n \xa0 \n -- These lines retrieve the transformation matrix (m) of the "shape" object with respect to the world coordinate system and set its translational components to 0. This effectively extracts the rotational part of the transformation matrix. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   forceVector = sim.multiplyVector(m, {0, 0, force}) \n \xa0 \n -- This line multiplies the modified transformation matrix m by a force vector {0, 0, force} to obtain a force vector in absolute world coordinates. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.addForceAndTorque(shape, forceVector, {0, 0, 0}) \n \xa0 \n -- Here, the script applies the computed forceVector to the "shape" object using sim.addForceAndTorque. This function applies the force to the center of mass of the object for one simulation time step. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   notFirstPass  then \n \xa0 \n -- This line checks if the notFirstPass variable is true. It\'s used to ensure that this part of the script is executed after the first simulation step. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   p = sim.getObjectPosition(shape, sim.handle_world) \n \xa0 \n -- Here, the script is getting the current position of the "shape" object in the world coordinate system. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   dx = {p[1] - previousPos[1], p[2] - previousPos[2], p[3] - previousPos[3]} \n \xa0 \n -- This line calculates the difference in position (dx) between the current position (p) and the previous position (previousPos) of the object in world coordinates. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 local   d =  math.sqrt (dx[1] * dx[1] + dx[2] * dx[2] + dx[3] * dx[3]) \n \xa0 \n -- The script calculates the Euclidean distance d based on the differences in position components dx. This distance is used to check if the object has moved significantly. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   d < 0.0001  then \n \xa0 \n -- This line checks if the object has moved by comparing d to a small threshold value (0.0001). If d is less than the threshold, it means the object hasn\'t moved significantly. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.setObjectInt32Param(shape, sim.shapeintparam_static, 1) \n \xa0 \n -- If the object hasn\'t moved significantly, this line sets the sim.shapeintparam_static parameter to 1, making the object static in the simulation. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 sim.resetDynamicObject(shape) \n \xa0 \n -- This line resets the dynamics of the object. It might be necessary to reset the object\'s dynamics after making it static to avoid any issues. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 enabled =  false \n \xa0 \n -- Finally, this line sets the enabled variable to false, which will prevent the script from applying further forces since the object is now considered static and not moving. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0 \n -- The if block is closed. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 previousPos = p \n \xa0 \n -- Regardless of whether the object has become static or not, the previousPos variable is updated with the current position for use in the next iteration of the sysCall_actuation function. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0 \n -- The if notFirstPass block is closed. \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 end \n \xa0 \n -- The if r > 0 block is closed. \n \xa0 \n \xa0\xa0\xa0\xa0 end \n \xa0 \n -- The if enabled block is closed. \n \xa0 \n \xa0\xa0\xa0\xa0 notFirstPass =  true \n \xa0 \n -- This line sets the notFirstPass variable to `true \n \n \n \n \n \n', 'tags': '', 'url': 'magnet.html'}, {'title': '馬達推動', 'text': '除了利用磁力吸引, 讓鋼球在軌道運動時能具備足夠動能返回圓形平台外, 另外一種設計是在鋼球 (或其他非鐵材質的圓球) 離開圓形平台孔洞之後, 設法利用隱藏式的馬達帶動機構, 以滾動方式加速圓球, 以便讓圓球返回平台. \n 有關馬達推動設計, 請參考: https://www.instructables.com/Marblevator-Perpetual/ 或 這個影片 . \xa0 \xa0 \n 機電模擬系統: \n 下載 CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z (需要下載密碼) \xa0 \xa0 \n CoppeliaSim 使用者手冊 , CoppeliaSim 4.3.0 使用手冊網站 \xa0 \n', 'tags': '', 'url': '馬達推動.html'}, {'title': 'w4-w5', 'text': '\n 本課程稱為個人網站，即github帳號.github.io，歡迎使用者自行設定內容，建議長期維護後可用於研究所推選、或投稿時使用。 \n 本課程評分網站，即github帳號.github.io/cad2023，內容及維護歴程資料將用於課程評分。 \n 第四週任務： \n \n 建立線上考試帳號。 \n 自行建立Github帳戶下的cad2023入口網站（ 範本 ），並設定Github Pages。 \n 利用Replit啟動Github帳號下的cad2023內容編輯網站，並設法將改版內容推向Github（ cp2023參考內容 ）。 \n 選取 112學年第一學期教師課程表 中的學員修課名單，利用Teams中的Excel取得學員Github帳號。 \xa0 \n 利用自選 CAD 套件（Solidworks、Solid Edge、Inventor、NX、Creo、Onshape、Solvespace 或其他套件）完成任務一的零組件設計繪圖。 \n 參考 pjcopsim 與 resources ，將任務一所完成的零組件轉入CoppeliaSim，並進行系統模擬設計。 \xa0 \xa0 \xa0 \n \n \n 評分網站與以太坊： \n 2a cad2023 學員網站與交通鏈接 \n 2b cad2023 學員網站與交通鏈接 \n 學員展示用IPv6位址： \n 2a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada:: 資料夾名單序號 \n 2b 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cadb:: 資料夾名單序號 \n \n 以下為專案一個永動機模擬器的零組件設計繪圖與初步系統模擬範例： \n \n Onshape 中的永動模擬器 , 轉入 CoppeliaSim 後放大 10 倍, 且 z 完整性上之模擬場景, 下載永動模擬器 stage2.7z  (需要下載密碼) \xa0 \xa0 \n \n w5 2b 從 Onshape 轉出零組件 STL 後轉入 CoppeliaSim 操作說明 。 \n w5 2b 建立cad2023且導入進入Replit學員名單 。 \xa0 \n w5 2a 建立cad2023且導入進入Replit學員名單 。 \xa0 \n \n 希望完成的系統模擬結果： \n \n 其他在電腦輔助設計室Win 11電腦所執行的 永動機模擬影片 \xa0 \n 請各學員借鏡 https://github.com/mdecycu/cmsite 範本建立cad2023評分文檔，或自行從空文檔，以 https://github.com/mdecycu/cmsimde 作為子模組建立cad2023評分文檔。 \xa0 \xa0 \xa0 \xa0 \n 利用 cmsite 以太幣內容模板建立 cad2023 以太幣 ： \n \n 登入Github帳號 \n 連線至 https://github.com/mdecycu/cmsite ，選擇 下方 使用此範本的建立新的儲存庫，建立cad2023以太坊 \xa0 \xa0 \xa0 \n \n 利用空以太幣建立 cad2023 以太坊 : (w7 2b 操作說明1  , 操作說明2  ) \xa0 \n 必須在近端 Windows、Linux 或 Mac 作業系統中的命令列中執行 git 指令，淺綠色部分為需要輸入的指令。 \n \n mkdir cad2023 \n cd cad2023 \n git init \n 利用 SciTE 建立 README.md 檔案, 放入後續在 Replit 會需要的 git submodule update 以及 pip install 指令 \n git add README.md \n git commit -m\xa0 "add README.md" \n 利用下列指令將 cmsimde 倉儲設定為本倉儲的子模組且放入 cmsimde 目錄中 \n git submodule add https: //github.com/mdecycu/cmsimde.git cmsimde \n 將 cmsimde 目錄中的 up_dir 內容複製到倉儲根目錄 \n 納入所有變更的內容 \n git add . \n git commit -m\xa0 "add cmsimde as submodule" \n 建立 main 分支, 且設為主分支 \n git branch -M main \n 設定 putty session 名稱為 github.com, 且能以 SSH 連線至 github.com 主機 \n git remote add origin git@github.com:scrum-1/cad2023.git \n git push -u origin main \n \n 過程中若出現 git 從 github.com 連線時產生 Error, 則可能是因為 Windows SChannel API 取用沒有設定對應 key 資料, 此時可以設法使用 OpenSSL 進行連線 handshake, 而不使用 SChannel API 進行認證. \n \n 參考的 .gitconfig 設定如下: \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n [user] \n \xa0\xa0\xa0\xa0 name = scrum-1 \n \xa0\xa0\xa0\xa0 email = scrum1@mde.tw \n [http] \n \xa0\xa0\xa0\xa0 proxy = http: //[2001:288:6004:17::4]:3128 \n \xa0 \xa0 \n ; Switching to openssl \n ; https: //github.com/desktop/desktop/issues/3260 \n [http  "https://github.com" ] \n sslVerify =  false \n \n \n \n \n \n \n \n \n \n 連結 << 上一頁 下一頁 >> Solidworks \xa0 \xa0 \xa0 \n \n \n 版權所有©2023 保留所有權利 | 此範本是用 \xa0 \xa0 透過 Colorlib \xa0 \n', 'tags': '', 'url': 'w4-w5.html'}, {'title': 'W6-W7', 'text': '\n w5之前的教學影片： \n 利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 \xa0(更完整的 網路設定內容 ) \n w5 2b 從 Onshape 轉出零組件 STL 後轉入 CoppeliaSim 操作說明 \n \n w6 \n 評分網站與以太坊： \n 2a cad2023 學員網站與交通鏈接 \n ag1 （ 回購 ） \xa0 \n ag2 （ 回購 ） \xa0 \n ag3 （ 回購 ） \xa0 \n ag4 （ 回購 ） \xa0 \n AG5 （ 回購 ） \xa0 \n AG6 （ 回購 ） \xa0 \n 2b cad2023 學員網站與倉儲連結 \n 學員展示用 IPv6 位址: \n 2a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada:: 班級名單序號 \n 2b 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cadb:: 班級名單序號 \n 建立線上考試題目: \n 學員完成任務一零組件繪圖 \n 學習如何利用 zmqRemote API Python 控制模擬場景中的零組件 \n 2a w6 已經建立評分倉儲, 設定 Pages, import 進入 Replit, 並能推送版本回到 github 名單 : \xa0 \n 40923118  \xa0(  （ 回購 ） \xa041123108  （ 回購 ） \xa0_  _  _  _  \xa0_  _  _  _  \xa0_  _  _  _  \xa0_  _  _  _  \xa0_  _  _  _  \xa0_  _  _  _  _  _  \xa0_  _  _  _  _  41123111  \xa0（ 回購 ） 41123112  \xa0（ \xa0回購 ） 41123114  \xa0（ 回購 ） 41123115  \xa0（ 回購 ） 41123116  \xa0（ 回購 ） 41123117  \xa0（ 回購 ） 411231  \xa0（ 回購 \xa0） 41123123  （ 回購 ） _  _  \xa0_  _  \xa0_  _  _  41123124  （ 回購 ） 41123  \xa0126  \xa0（ 回購 ） 41123128  \xa0（ 回購 ） 41123129  （ 回購 ） 41123130  \xa0（ 回購 ） 41123134  \xa0（ 回購 ） 41130  \xa0（回購 ） 41123134  \xa0（ 回購 ） 411231353 回購 ） \xa0（ 回購 \xa0） 41123140  \xa0（ 回購 ） 41123141  （ 回購 ） 41123142  \xa0（ 回購 ） 41123143  （ \xa0回購 ） 41123144 （回購） 41123145  （ 回購 \xa0） 41123146  \xa0（ 回購 \xa0） 411238 \xa0回購 ） 41123146  （ 回購 \xa0） 411233 回購 （ 123351  ） \xa00  \xa0（ 回購 ） 41123152  \xa0（ 回購 ） \n 2b w6 已經建立評分倉儲, 設定 Pages, import 進入 Replit, 並能推送版本回到 github 名單 : \xa0 \n 41123205 41123215 41123216 41123220 41123231 41123241 41123243 41123251 \n 利用 pull request 加入或修改 https://github.com/mdecycu/studlist \xa0倉儲中 2b.txt 資料的 說明影片 . \xa0 \xa0 \xa0 \n 利用 https://github.com/mdecycu/cmsite \xa0作為 template 建立 cad2023 倉儲與網站, 並轉入 Replit 進行維護的 說明影片 . \xa0 \n 2a 開始進行九人一組, 每三人坐在一起, 由組長建立 cad2023_ag1 ~ cad2023_ag6, 並將 mdecycu 設為協同者的 說明影片 . \n \n w7 \n 2b 進行九人一組安排固定座位, 由組長建立 cad2023_bg1 ~ cad2023_bg6, 並將 mdecycu 設為協同者. \n 各九人分組必須在 w9 之前繳出下列圖示的 3D 可自行列印的零組件模型, 含各 CAD 套件的完整安裝與零組件繪圖過程影片(期中考週由各組進行簡報) . \n \n SolidWorks, 請採用 2022 以上版本 , 安裝檔案 SOLIDWORKS 2022 SP3.1_20220711.7z 16GB. 參考資料: http://wcm.cycu.org:88/github/cad2019/downloads/Solidworks_Tutorial/ (在系網以 IPv6 連線開啟) \xa0 \xa0 \xa0 \n NX, 請採用 NX2027.3401_lite_cad2022.7z (需要下載密碼, 下載 2GB, 解開後約 8GB). \xa0 \xa0 \n Inventor, 請在校網或使用 VPN 下載 2022 版本 (載點 1 , 2 , 3 , 安裝檔案 Inventor_Pro_2022_Traditional_Chinese_Win_64bit_Dlm_001_003.sfx.exe 2GB). \xa0 \xa0 \xa0 \n Solid Edge, 請使用 Community Edition , Gmail 登入後, 下載 Solid_Edge_Community_2023_2210.exe 3.8GB. \xa0 \n Creo, 請使用 Student Edition , 以學校電子郵箱註冊可以下載 Creo 10 (MED-100WIN-CD-470_10-0-0-0_Win64.zip 安裝檔案 5.9GB), 參考資料 . \xa0 \xa0 \n 形狀 。 \n Fusion 360, 請在校網或使用 VPN 下載 , Fusion 360 Admin Install.exe 安裝檔案 GB. \xa0 \n \n \n 維護 cad2023 倉儲與網站的方法: \n \n 複製 + Github \n 可攜環境 + Github (下載包含 Python 3.12.0, Tiny C Compiler 與 CoppeliaSim 4.5.1 的 portable_2024_cp_wcms_cad_cd_w_ebooks.7z , 1.2GB 解開後 3.3GB, 需要下載密碼), 維護倉儲與網站說明影片 之一 , 之二 . \xa0 \xa0 \n 自架伺服器+ Github \n \n \n ptc << 上一頁 下一頁 >> Win11 \xa0 \xa0 \xa0 \n \n \n 版權所有 ©2023 保留所有權利 |  此模板是用 \xa0 \xa0 透過 Colorlib \xa0 \n', 'tags': '', 'url': 'W6-W7.html'}, {'title': 'w8', 'text': '\n 針對 Coppeliasim 4.6.0 版的推出: \n CoppeliaSim 於 2023.10.21 推出 4.6.0 版 . (因為更改不多, 目前可以沿用 4.5.1 rev4, 但仍必須關注 CoppeliaSim 逐步強化 Python scripting 的趨勢( 1 , 2 ), 其目的在於能夠更便於在機電整合場景系統中, 導入更多的 AI 相關 Training) \xa0 \xa0 \n plugin 架構更新, 可加載或卸載 plugin \xa0 \n sim.setThreadAutomaticSwitch 已棄用，取而代之的是 sim.setStepping \xa0 \n sim.switchThread 已被棄用，取而代之的是 sim.step \xa0 \n 命令列 選項 -H 現在載入 CoppeliaSim 庫的無頭版本。 \xa0 \n CoppeliaSim 使用者手冊: https://mde.tw/pjcopsim \xa0 \n zmq 遠端 API： https://www.coppeliarobotics.com/helpFiles/en/zmqRemoteApiOverview.htm \xa0 \n https://github.com/CoppeliaRobotics/zmqRemoteApi \n 適用於 IPv6 的 CoppeliaSim 4.5.1： \n 下載 CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z (需要下載密碼) \xa0 \xa0 \n 下載 zmqRemoteAPI Python for cad2023.7z (需要下載密碼) \xa0 \xa0 \n \n 有關 s1511.cycu.org 主機的使用, 也可以參考 https://mde.tw/cpnote 中各章節頁面內容. \xa0 \xa0 \n 維護網站的三個方式: \n \n localhost 透過 token, SSH 確定 git push 權限, SSH 設定可透過 Putty 完成 \n Replit 透過 connect 功能連結與 Github 的權限 \n 自架主機 s1511.cycu.org, 透過 SSH 與分配埠號 \n \n \n 以下將說明第 3 種方法, 使用 s1511.cycu.org 管理個人與分組網站: \n 其中包括 1) 如何遠端登入 、2 ) 如何取放檔案 、3) 如何與 github 帳號彼此信任 、4) 如何取下 cad2023 、5) 如何啟動或關閉 cad2023 倉儲 、6) 如何連結到動態網站 、7) 如何設定靜態網站 、8) 如何連動動態網站改版與靜態網頁 、9) 如何對資料進行保全 以及 10) 網路連線協定 等相關議題. \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n w8_2a_s1511 設定操作影片 part1.mp4 \n w8_2a_s1511 設定操作影片 part2.mp4 \n w8_2a_s1511 設定操作影片 part3.mp4 \xa0(只有前段有聲音) \n w8 2a s1511 設定操作影片 part4.mp4 \n 1) \xa0如何遠端登入 : \n 遠端登入到 s1511.cycu.org (只支援 IPv6 網路協定), 命令列指令 ssh client, 工具可以使用 Putty \n 使用 ssh 指令: ssh 帳號@s1511.cycu.org 然後輸入密碼 (鍵入密碼時螢幕並不會顯示字元) \n 使用 putty.exe 設定 session 令其連接到\xa0 s1511.cycu.org \n 登出指令為 exit \n 假如在 IPv4 網路協定下, 則 ssh 指令與 putty.exe 都必須透過能支援 IPv6 的代理主機進行連線. \n 2b w8 作業: 請根據\xa0 cad2023_2b_w8.txt \xa0檔案中的內容, 透過程式的讀取與篩選, 按照時間先後, 列出 2b 修課學員中已經登入 s1511.cycu.org 的學號. (修課學員名單\xa0 2a:\xa0 0838 , 2b:\xa0 0851 ) \n 假如在近端處理, 必須同時儲存兩個檔案後, 進行資料選取: \n get_stud_num_from_last_data.py \xa0(若採 Brython 編寫, 可以直接 列出 2b w8 結果 \xa0( 2a w8 結果 ), 依照登入時間先後排序, 其中 41123227 為管理者最早測試時登入, 若採用 ANSI 編寫: c_parse_last_cp2023.7z ) \xa0 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n \n \n \n # 讀取學號檔案 \n with  open ( "2b_user_list.txt" ,  \'r\' ) as user_file: \n \xa0\xa0\xa0\xa0 user_lines  =   user_file.read().splitlines() \n \xa0 \n # 讀取 last 指令轉出的檔案, 以 last -w > cad2023_2b_w8.txt 建立檔案 \n with  open ( "cad2023_2b_w8.txt" ,  \'r\' ) as cad_file: \n \xa0\xa0\xa0\xa0 # 以下是利用跳行符號, 將每一行區隔成數列 \n \xa0\xa0\xa0\xa0 cad_lines  =   cad_file.read().splitlines() \n #print(cad_lines) \n \xa0 \n # 從 cad_lines 建立所有登入使用者數列 \n login_users  =   [] \n for   i  in   cad_lines: \n \xa0\xa0\xa0\xa0 line_list  =   i.split( " " ) \n \xa0\xa0\xa0\xa0 login_users.append(line_list[ 0 ]) \n #print(login_users) \n \xa0 \n # 根據 https://stackoverflow.com/questions/480214/how-do-i-remove-duplicates-from-a-list-while-preserving-order \n # 數列去除重複元素但仍保持原始次序 \n login_users  =   list ( dict .fromkeys(login_users)) \n #print(login_users) \n \xa0 \n # 建立數列存放符合條件的使用者 \n valid_users  =   [] \n \xa0 \n # 取出符合條件的使用者 \n for   line  in   login_users: \n \xa0\xa0\xa0\xa0 if   "cad"   in   line: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 將 cad 字串去除 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 user_number  =   line.replace( "cad" , "") \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   user_number  in   user_lines: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 valid_users.append(user_number) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # 利用 reverse() 將 valid_users 反向排序 \n valid_users.reverse() \n \xa0 \n # , 最早登入者列在最前面 \n for   user  in   valid_users: \n \xa0\xa0\xa0\xa0 print (user) \n \n \n \n \n \n \n \n 2) \xa0如何取放檔案 : \n 利用 sftp 從 s1511.cycu.org 取下檔案畫面: \n \n 進入對應的目錄之後, 以 pwd 確認所在目錄後, 以 get 取下檔案, 以 put 放上檔案, 例如: 進入 images 目錄後, 可以透過 get gd_ex1.png 取下圖檔, 若要將圖檔放入 images 目錄, 則只要確定 sftp 進入後, cd 到 images 目錄, 然後以 put gd_ex1.png 將圖檔送入. \n 3) \xa0如何與 github 帳號彼此信任 : \n 利用 ssh-keygen 在 .ssh 目錄建立 id_rsa 與 id_rsa.pub, 之後將 id_rsa.pub 登記到各自帳號下 settings 的 SSH and GPG keys 區域. \n .ssh 目錄中的\xa0 config , 將 SSH session 名稱設為 github.com: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n Host github.com \n User git \n Hostname github.com \n ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n \n \n \n \n \n 將 上列 config 送到帳號下的 .ssh 目錄之後, 就可以利用 github.com 作為 session, 從 github.com 取下 cad2023 倉儲, 並且已經具備 git push 的權限. \n 4) 如何取下cad2023  : \xa0 \n 以 SSH 協定取下 cad2023 的指令: \n git clone --recurse-submodules git@github.com :帳號/cad2023.git \xa0 \n 接下來必須從 cad2023 取下 server.py 進行編輯, 放入自己分配到的 9xxx 埠後, 再送回. \n 5) \xa0如何啟動或關閉 cad2023 倉儲 : \n 當使用者已經將上述 public key 登錄到 Github 帳號下, 且已經將 server.py 中的 9xxx 改為自己所分配到的內部埠號後再送回, 則可以利用 python3 server.py 啟動編輯網站, 並測試是否可以連線到 https://s1511.cycu.org:8xxxx \xa0 \n 由於管理者內建密碼為 admin, 使用者修改後, 編碼字串將存入 config/config, 此檔案必須設為只有管理者可以 read, 若目前位於登入後的工作目錄, 則其指令為: \n chmod og-rwx 配置/配置 \n 表示要將 others 與 group 針對 config/config 檔案的 read, write 與 execute 權限取消. \n 若希望使用者登入後動態網站仍然執行, python3 server.py& \n 當 server.py 已經啟動, 使用者登入後可以利用以下指令, 列出各使用者啟動網頁編輯所對應的 PID (Process ID): \n ps -axo pid，comm，uname |  grep “python3” \n 各用戶若希望刪除已經啟動的 Process, 可以找到所啟動的 PID 後, 以下列指令關閉服務 (若 PID = 1234): \n 殺死 1234 \n 其中, 系統管理者可以刪除所有 Processes, 而各用戶只能刪除各自所啟動的 Process. \n 6) \xa0如何連結到動態網站 : \n python3 server.py 啟動測試是否可以連線到 https://s1511.cycu.org:8xxxx \xa0 \n 編輯網站啟動之後, 使用者登入後可以透過 config 指令修改管理者密碼, 而此一密碼的編碼將存入 s1511 主機倉儲檔案中的 config/config 檔案中, 且此一檔案將只會位於 s1511, 而不會被推向 github.com (因為 .gitignore 的設定). \n 當使用者決定要進行 git add 與 git commit 之前, 必須先以 git config 設定 user.name 與 user.email, 此設定將會存入 .gitconfig 檔案中. \n 7) \xa0如何設定靜態網站 : \n 前面已經在 /home/帳號/倉儲目錄 透過 SSH 協定從 github.com 取下檔案內容, 由於 SSH keys 的設定, 此一倉儲一旦改版, 可以在新增提交之後, 可以透過 git push 指令將改版資料推向 github.com. \n 當倉儲的靜態網站 git push 至 github.com 後, 將會透過 Github Pages 的設定進行轉檔. \n 若使用者希望在 s1511 主機中伺服對應的倉儲靜態網站, 則可以將倉儲檔案放入帳號中的 public_html 目錄中. \n 由於位於 public_html 僅需鏡射位於 github.com 中的倉儲檔案資料, 並不作為 git commit 與 git push 之用, 因此可以利用 git clone --recurse-submodules https://github.com/帳號/倉儲名稱.git 取下 (也就直接以 https 協定取下倉儲內容), 並可在 https://s1511.cycu.org/~帳號/倉儲名稱 中擷取靜態網站資料. \n 8) 如何連動動態網站改版與靜態網頁: \xa0 \n 當每次 /home/帳號/倉儲 中的檔案改版, 而且資料已經推送到 github.com, 使用者就可以進入 public_html 中的對應倉儲目錄, 以 git pull 指令從 github.com 取得最新的版本資料, 此指令可以採手動, 也可以設法納入倉儲的 acp 指令中: \n acp 必須納入 public_html 目錄中的靜態網站 git pull, 且利用 chmod u+x acp 令其可以執行. \n acp 內容: \xa0 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n #! /bin/bash \n git add . \n git commit -m  "$1" \n git push \n cd ./../public_html/cad2023 \n git pull \n \n \n \n \n \n \n \n 9) \xa0如何對資料進行保全: \n chmod u+x acp \n chmod og-rwx 配置/配置 \n chmod 711 /home/cad學號 \n chmoe 755 /home/cad學號/public_html \n 假如自己所分派到的網路 port 遭到占用, 可以利用下列指令查出使用該埠號的使用者帳號: \n 例如要查詢埠號 9210 埠號的使用情形, 指令為\xa0 lsof -i :9210, 其中 ls 為 list, of 為 open file, -i 中的 i 為 internet, :9210 表示要求列出與 port 9210 有關 internet 使用相關的資料. \n 10) \xa0網路連線協定: \n 將 cad2023 倉儲資料取到 s1511.cycu.org 帳號下, 若使用 SSH 協定且位於只有 IPv6 網路協定, 則分別牽涉以 SSH 及 https 協定連線到 github.com 的設定. \n 其中所謂運用 SSH 協定與 github.com 連線, 運用在 git clone --recurse-submodules git@github.com:帳號/cad2023.git 因為其流程是利用 SSH 協定以 git 作為帳號登入到 session 名稱為 github.com 的連線主機 (即 config 中的 Hostname 設定), 能不能遠端登入則取決於 github.com session (即 config 設定檔案中的 Host 名稱) 後面的帳號是否已經登錄與目前 .ssh/id_rsa 所對應的 public key. \xa0 \xa0 \n 至於在純 IPv6 網路下的 s1511.cycu.org 其 https 所需的 proxy 設定, 已經由管理者設定於 /etc/environment 中, 因此所有使用者都無需設定. \n \n 電腦輔助設計與實習課程分組網站在 s1511.cycu.org 所分配的外部與內部埠號: \n cad2023_ag1: 8232, 9232 \n cad2023_ag2: 8233, 9233 \n cad2023_ag3: 8234, 9234 \n cad2023_ag4: 8235, 9235 \n cad2023_ag5: 8236, 9236 \n cad2023_ag6: 8237, 9237 \n \n cad2023_bg1: 8238, 9238 \n cad2023_bg2: 8239, 9239 \n cad2023_bg3: 8240, 9240 \n cad2023_bg4: 8241, 9241 \n cad2023_bg5: 8242, 9242 \n cad2023_bg6: 8243, 9243 \n \n w8 登入查驗完成名單: \n 2a： \n 41023134 40923118 41123145 41123137 41123153 40923127 41123139 41123108 40923213 41123117 41123141 41023245 41123122 41123152 41123129 41123149 40923139 40923124 41123131 41123135 \n 2b： \n 41123243 41123241 41123249 41123214 41123224 41123228 41123215 41123245 41123216 41123204 41123234 41123244 41123235 41123240 41123229 41123209 41123207 41123246 41123250 41123201 41123217 41123251 41123218 \n 模擬參考: \n https://www.researchgate.net/publication/263466730_Mathematical_Modeling_of_Electromagnetic_Levitation_Ball_using_Bondgraph \n https://hal.science/hal-02408779v1/file/Magnetic_Canon.pdf \n Win11 << 上一頁 下一頁 >> w9-w10 \xa0 \xa0 \xa0 \n \n \n 版權所有 ©2023 保留所有權利 |  此模板是用 \xa0 \xa0 透過 Colorlib \xa0 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9-w11', 'text': '\n 請各分組實際操作 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html 之後, 將操作過程與心得放入各組的分組網站中 (頁面標題為 w11), 並說明各組員在過程中所負責的工作內容與任務, 各組員所負責的項目請放入個人的網頁中. \xa0 \xa0 \n 過程中所遭遇問題, 請各組員利用 Teams 詢問 (CAD2023 MS Teams 代碼為: fnueb56). \n 執行 perpetual motion simulator 系統: \n 紀錄鋼球運動速度: 1 , 2 . \xa0 \xa0 \n 對模擬物件施力: 1 (non-central), 2 (center of mass), 3 (施力並設定材料性質). \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 模擬電磁力: 1 , 2 . \xa0 \xa0 \n CoppeliaSim 鋼球永動模擬器電腦輔助設計三個階段: 建立模型零組件 - 轉入機電模擬系統 - 根據實際物理條件設置機電系統.\xa0 perpetual_motion_simulator_project_cad2023.7z 下載 (需要密碼) \xa0 \n 雲端、區網與近端環境中的電腦輔助設計環境: \n 直接在網路上進行電腦輔助設計的好處雖然很多, 但是在 商用的雲端系統 , 例如: Github 或 Replit, 使用者只能依照服務提供者的方法及流程進行應用, 當 Github 宣布在 2023 年底之前各用戶必須使用 2FA 認證登入, 使用者只能照辦, 否則帳號就可能被禁用. \n 作為 Replit 的免付費用戶也處於相同的情況, 當服務提供者宣布在 2024 年初開始, 只有付費用戶可以使用廣域的 Webview, 若希望仍維持免付費使用 (目前 Replit Core 年費 120 美元), 屆時再看是否能繼續開啟動態網站編輯, 並將改版內容提交推送到 Github 倉儲, 以便採分散式版次管理流程維護 Github Pages 網站. \xa0 \xa0 \n 同樣利用網路服務, 但設法將所有超過兩百名用戶集中到 自行搭建的廣域網站 系統, 也可以擁有類似 Replit 上維護網站內容的優點, 可是壞處是在系上工作站室所設定的軟硬體與網路連線, 都必須自行維護, 可用性與穩定度都遠遠不及商用的雲端系統. \n 另外, 在無網路連線的情況下, 若先前已經將 Github 上倉儲, git clone 到 近端硬碟或隨身碟 , 使用者仍可以直接利用可攜程式系統, 執行動態網站並針對電腦輔助流程新增提交改版內容, 等到有網路連線的時段再將資料推送到 Github. \n 最後, 假如系上的連外網路無法順利與 Github 相連, 所有電腦輔助設計與協同都必須在區網進行, 則可以使用 Fossil SCM 進行各學員的分散式版次管理. (請參考 這裡 的說明). \xa0 \xa0 \n 循著上述相同的網路或自主環境, 利用 Onshape 就與商用雲端系統相似, 一定要上網才能進行輔助設計繪圖, 而在系上或學校網路認證才能開啟的 NX 或 SolidWorks , 就必須在自行搭建的認證主機能夠運作, 才可連線認證後開啟. 至於 Solid Edge 可攜版與 Solvespace 則可以在沒有網路連線的情況下進行零組件的設計繪圖. \xa0 \xa0 \xa0 \xa0 \xa0 \n \n w10 網路狀態: 目前似乎從學校電腦無法使用 hinet 的 IPv6 DNS 伺服器. 驗證方式: 在命令列中輸入 nslookup, 然後以 server 2001:b000:168::1 指令將 DNS 設為中華電信的符號名稱伺服器, 然後查詢 google.com. \n 因應方法: 使用機械設計系所建立的 DNS 伺服器, 140.130.17.3 以及 2001:288:6004:17::3 \xa0 \n 無法使用中華電信 DNS 原因: 應該是學校網管修改設定, 禁止跨區設定 DNS 伺服器. \n w10 Ubuntu 問題: 22.04 版更為最新後, netplan 在無 openvswitch 啟動的情況下無法更新設定. \n 先處理 /etc/netplan/net.yaml 中 DNS 伺服器改為系上主機, 在無法使用 sudo netplan apply 更新 /etc/netplan/net.yaml 設定之前, 可以查詢 /etc/environment 中是否使用 IPv6 address 進行設定 http_proxy 與 https_proxy 變數. 或者修改 /etc/resolv.conf 中的 nameserver 設定, 讓 net.yaml 中的 DNS 設定可以運作. 且利用 sudo apt install openvswitch-switch 安裝並執行 netplan 所需的服務 (其實是 bug, 但為了能讓 netplan 正常運作的權宜之策). \xa0 \xa0 \n 有關電腦輔助設計室網路設定: \n w10_2b_cadlab_network_setting.7z (需要下載密碼) - 電腦輔助設計室網路設定批次與 Powershell 檔案. \xa0 \n tinyc.7z (需要下載密碼) - 使用 Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot. \xa0 \n python3114_git_putty.7z (需要下載密碼) - 將近端 cmsimde 啟動並改版後推向 Github 所需的檔案. \xa0 \n 若電腦輔助設計室網路不順, 可以先將倉儲 clone 到隨身碟, 並利用近端工具進行輔助設計且改版後 (git add and git commit), 等到網路順暢時才 push. \n \n creo 10 安裝流程的 wink 專案檔案下載 (需要密碼) \xa0 \n 有關線上簡報、網誌與多媒體影片製作工具, 請參考: https://mde.tw/cpnote/content/w10.html \xa0 \n 有關學習計算機程式與電腦輔助設計相關課程的心態與方法, 請參考 這裡 的說明. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z (需要下載密碼) \xa0 \n 有關口頭報告 (oral presentation): \n PowerPoint 與 Reveal.js：選擇簡報工具 (softwarekeep.com) \xa0 \n https://ithelp.ithome.com.tw/articles/10185467 \xa0 \n cad2023 倉儲中的 reveal.js:\xa0 https://mde.tw/cadnote/reveal/ \xa0 \n 有關永動機運動模擬玩具 (perpetual motion simulator toy): \n CAD 零組件繪圖 \n 原型製作前的系統模擬與製程規劃 \n 如何學習 CoppeliaSim: \n 透過閱讀\xa0 https://mde.tw/pjcopsim \xa0中的 tutorial 與相關指令說明後, 實際操作測試並在個人網頁中記錄各項功能的使用方法. \n 進入 CoppeliaSim Forum , 搜尋相關討論或發問. \xa0 \n Arduino code to CoppeliaSim 展示. ( Horosim , 備份 ), 更早的 討論 . 虛實整合: 1 , 2 , 3 . \xa0 \xa0 \xa0 \xa0 \xa0 \n 從既有討論串中學習: 1 , \xa0 \n 了解與磁場模擬有關的研究: 1 (需要下載密碼), 2 , 3 . \xa0 \xa0 \xa0 \xa0 \n 從 案例 中學習. \n 有關鋼球平衡台 (steel ball balancing platform): \n 有關虛實整合彈珠台 (cyber-physical pinball table): \n', 'tags': '', 'url': 'w9-w11.html'}, {'title': 'w12', 'text': '2b_w12_seat.txt \n 2a_w12_seat.txt \n w12_2b_1.mp4 \xa0(利用 簡報 說明最新的網路設定流程, 以及 w12 的課堂測驗內容) \n 校方的 DHCP6 並沒有正確設定系上的 IPv6 Gateway, 也沒有 DNS 伺服器設定, 使用者必須自行根據 所分配的固定 IPv6 位址 進行設定, 另外校方的 IPv6 DNS 伺服器也無法正常運作, 必須使用系上的 DNS server 設定. \n Windows 網路查詢指令: ipconfig /all \n DNS 伺服器查詢指令: nslookup \n 查詢至特定主機的路徑指令: tracert \n 其他 Windows 常用的網路指令 \n w12_2b_2.mp4 \xa0 ( 利用 簡報 說明如何將座次表放到倉儲 downloads 目錄, 且將連結放入 w12 頁面) \n 利用人工或電腦輔助方法建立 w12 頁面中的班上學員座次表? \n \n w12_2a_1.mp4 \xa0 (ssh-keygen 在 .ssh 建立 id_rsa 與 id_rsa.pub, 以 sftp 放入 config, 並利用 puttygent 將 id_rsa 轉為 .ppk 以便設立 session 用) \n w12_2a_2.mp4 \xa0 (如何利用 ChatGPT 協助解決座位排序與列印問題) \n w12_2a_3.mp4 \xa0 (有關 Solvespace 基本繪圖與轉檔, 最後說明如何利用 IPv6 相容的 Python 與 CoppeliaSim 進行互動) \n 使用 ChatGPT 協助處理 上述 問題一 : \n 輸入1: (在雙引號之後, 直接將檔案內容複製貼上, 作為輸入內容) \n 請利用 Python 讀取下列檔案名稱為 2b_w12_seat.txt "2b stud num\xa0\xa0 \xa0seat 41123201\xa0\xa0 \xa0 41123202\xa0\xa0 \xa0(3,8) 41123203\xa0\xa0 \xa0(3,7) 41123204\xa0\xa0 \xa0(6,8) ~~~ 中間資料沒有列出來 41136124\xa0\xa0 \xa0(3,2) 41136126\xa0\xa0 \xa0 41136131\xa0\xa0 \xa0" \n ChatGPT 回覆1: \n 要讀取這個檔案，你可以使用 Python 的檔案處理功能。以下是一個基本的範例程式碼，可以協助你達成這個目標： \n w12_chatgpt_prob1_ans1.py \n 這個程式碼會將學號和座位號的對應關係存儲在一個字典中，然後顯示出來。請注意，這裡使用 strip() 方法來去除空格和換行符號。 請確保你的檔案路徑正確，並注意檔案的編碼，以確保正確讀取中文內容。 \n 討論1: 經執行 ChatGPT 回覆的程式, 已經可以讀取資料, 並且列出資料. 但資料沒有排序. \n 輸入2: \n 假如前面程式中的座位號第一個 index 代表"列"而第二個 index 代表行, 請延續上個程式, 由左到右作為每一列的順序, 而且希望陣列排序是列出該位置上的學員學號 \n ChatGPT 回覆2: \n 了解，如果要按照座位號的列和行來排序並列出每個位置上的學號，我們可以修改程式碼來實現。以下是修改後的程式碼： \n w12_chatgpt_prob1_ans2.py \n 這裡我們使用了 sorted 函數，並通過 key 參數指定排序規則，即按照列和行的順序進行排序。最後，我們顯示排序後的結果，列出每個位置上的學號。 \n 討論2: 經執行 ChatGPT 回覆的程式, 所讀取的資料已經排序. \n \n 輸入3: \n 假如 "2b_w12_seat.txt" 可以從 "https://mde.tw/cadnote/downloads/2b_w12_seat.txt" 這個網址讀取, 而且希望將上一個 Python 程式改用 Brython 編寫, 要如何修改? \n ChatGPT 回覆3: \n Brython 是一個允許在瀏覽器中運行 Python 3 代碼的工具，而在瀏覽器中讀取外部檔案通常會涉及到跨網域 (Cross-Origin) 的問題。為了避免這些問題，我們可以使用 JavaScript 來在瀏覽器中讀取檔案，然後將檔案內容傳遞給 Brython。以下是修改後的 Brython 程式碼： \n (因為我們不使用 ChatGPT 混用 Javascript 與 Brython 的建立, 所以此地 不列出其回覆的原始碼 ) \n 這個 HTML 文件引入了 Brython，然後使用 JavaScript 的 XMLHttpRequest 將檔案內容從指定的 URL 讀取並傳遞給 Brython 的 eval 函數。在 eval 函數中執行 Python 代碼。這樣就可以在瀏覽器中運行 Python 代碼，同時解決了跨網域的問題。請注意，這裡假設檔案是文本格式，如果是二進制檔案，需要進一步處理。 \n 討論3: ChatGPT 建議的程式或許也能達成目的, 但是混用 Javascript 與 Brython 並不是目前所需, 因此不採用. \n \n 輸入4: \n 假如我們已經知道 Brython 可以利用 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).read() 或 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).readlines() 讀取到檔案, 可以將上一個程式全部改用 Brython 完成嗎? \n ChatGPT 回覆4: \n 是的，如果你已經知道 Brython 可以使用 open("https://mde.tw/cadnote/downloads/2b_w12_seat.txt").read() 或 open("https://mde.tw/cadnote/downloads/2b_w12_seat.txt").readlines() 讀取檔案，你可以將上述 Python 程式碼轉換為 Brython 程式碼。以下是修改後的程式碼： \n w12_chatgpt_prob1_ans3_brython.py \xa0 (這裡已經配合 cmsite 中的 Brython 環境, 可以 直接從 Gist 取出執行 ) \n 這個 HTML 文件使用 Brython 在瀏覽器中運行 Python 3 代碼。Brython 的 open 函數會模擬 Python 的 open 函數，讓你能夠在瀏覽器中讀取檔案。這樣就可以使用和在 Python 中一樣的方式處理檔案，同時在瀏覽器中運行。 \n 討論4: ChatGPT 因為帶有非常大量的邏輯變數, 因此詢問時若能給予明確指示, 將可能取得更有用的回答. \n 接下來就可以延續上述回覆所得到的程式碼, 加以研究後再修改為其他格式的資料輸出, 例如: \xa0 直接在 Brython 執行後, 列出所需要的 html 物件 . \n', 'tags': '', 'url': 'w12.html'}, {'title': '布萊頓', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言）  123 \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python的平衡介紹 \n 縮排（Python採用4個Spaces縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字符串 （字串） \n print (Python 內建函數,  print() 函數式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 開放 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息時間 \n 曾經 \n 類別 \n 此頁面示範如何在同一頁面下加入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動 Brython 時，設定分割 .py 檔案放入 downloads/py 目錄中引用。 \n 也所有即將對應的 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時交叉 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</> 腳本 \n 從1累加到100： \n 1加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1加到100 cango_三_齒輪 BS蛇 人工智能俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '布萊頓.html'}]};