var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  
    $scope.isDisabled = false;
    $scope.northeast;
    $scope.southeast;
    $scope.mientrung;
    $scope.name;
    $scope.style;
    $scope.count = 0;
    $scope.restaurents = [
    {
     "place": 
      {
        "hinh": "ElGaucho.png",
        "hoanTien": "15%",
        "id": 1,
        "mien": {
          "bac": {
            "address": [
              "29 Liễu Giai VINCOM Center Metropolis Unit L1-16A Ground Floor, Ba Đình, Hà Nội",
              "11 Tràng Tiền, Hoàn Kiếm, Hà Nội",
              "No.2, Lot G2, Ground Floor, Someret West Point, Đường Tây Hồ, Quảng An, Tây Hồ, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "74/1 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Tp. HCM",
              "LOT L1 – 01,02, Estella Place, 88 Song Hành, An Phú, Quận 2, Tp. HCM",
              "UNIT CR1-U3, Crescent Mall, Phú Mỹ Hưng, Quận 7, Tp. HCM"
            ]
          },
          "trung": {
            "address": ["Unit G1-G4, Ground Floor, Indochina Riverside Mall, 74 Bạch Đằng, Hải Châu 1, Hải Châu, Đà Nẵng"]
          }
        },
        "ten": "El Gaucho"
      },
    },
    {
        "place":
        {
             "hinh": "Hotpot.jpg",
            "hoanTien": "10%",
            "id": 2,
            "mien": {
            "bac": {
                "address": [
                "Tầng 3, Lotte Center, 54 Liễu Giai, Quận Ba Đình, Hà Nội",
                "126 Nguyễn Khánh Toàn, Quận Cầu Giấy, Hà Nội",
                "Tầng 4, Vincom Center, 119 Trần Duy Hưng, Quận Cầu Giấy, Hà Nội"
                ]
            },
            "nam": {
                "address": [
                "Tầng L4, Vincom Plaza, 50 Lê Văn Việt, Quận 9, Tp. Hồ Chí Minh",
                "Tầng 4, SC Vivo City, 1058 Nguyễn văn Linh, Quận 7, Tp. Hồ Chí Minh",
                "Tầng 3, Aeon Mall Bình Tân, 1 Đường Số 17A, Quận Bình Tân, Tp. Hồ Chí Minh"
                ]
            },
            "trung": {
                "address": ["Lô L3 - 06, Tầng L3, Vincom Plaza, 78 - 80 Trần Phú, Thành phố Nha Trang, Khánh Hòa"]
            }
            },
            "ten": "Hotpot Story"
        }
    },
    {
        "place": {
            "hinh": "ThaiExpress.jpg",
        "hoanTien": "10%",
        "id": 3,
        "mien": {
          "bac": {
            "address": [
              "Tầng 5 TTTM Vincom Nguyễn Chí Thanh, 54A - 56 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
              "Tầng B2, Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội"
            ]
          },
          "nam": {
            "address": ["Gian hàng L4 -04, Tầng 4, TTTM Vincom Biên Hòa - 1096 Phạm Văn Thuận, Phường Tân Mai, Thành Phố Biên Hòa, Tỉnh Đồng Nai"]
          }
        },
        "ten": "Thai Express"
        }
    },
    {
        "place":{
            "hinh": "SeoulGarden.png",
            "hoanTien": "10%",
            "id": 4,
            "mien": {
            "bac": {
                "address": [
                "T5, Vincom Center, 191 Bà Triệu, Hai Bà Trưng, Hà Nội",
                "SO-07, Tầng G, The Garden, Mỹ Đình, Từ Liêm, Hà Nội"
                ]
            },
            "nam": {
                "address": [
                "208 Nam Kỳ Khởi Nghĩa, P.6, Q.3, Tp. HCM",
                "B3-16A, Vincom Center, 70 – 72 Lê Thánh Tôn, P.Bến Nghé, Quận 1, Tp. HCM",
                "5-09& 5-10& 5-11, TTTM Sư Vạn Hạnh - Tầng 5, 11 Sư Vạn Hạnh, Phường 2, Quận 10, Tp. HCM",
                "Lô 03F - Tầng 3, TTTM Lotte Mart Nam Sài Gòn, 469 Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, Tp. HCM"
                ]
            }
            },
            "ten": "Seoul Garden"
        }
    },
    {
        "place":{
            "hinh": "SushiKei.png",
        "hoanTien": "12%",
        "id": 5,
        "mien": {
          "bac": {
            "address": [
              "Tòa Nhà M3-M4, Số 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội",
              "Tầng 3, Lotte Department Store, 54 Liễu Giai, Ba Đình, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "Gian hàng Lô 03-24b, Tầng 3, TTTM SC Vivocity - Dự án TTTM Dịch Vụ Giải Trí Nam Sài Gòn, số 1058 Nguyễn Văn Linh, Khu phố 1, Phường Tân Phong, Quận 7, Tp. HCM",
              "5-03A,Tầng 5, TTTM Sư Vạn Hạnh, 11 Sư Vạn Hạnh, Phường 2, Quận 10, Tp. HCM",
              "Lô 03F - Tầng 3, TTTM Lotte Mart Nam Sài Gòn, 469 Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, Tp. HCM"
            ]
          }
        },
        "ten": "Sushi Kei"
        }
    },
    {
        "place":{
            "hinh": "Capri.png",
        "hoanTien": "12%",
        "id": 7,
        "mien": {
          "bac": {
            "address": [
              "Tầng 5, Vincom Tower, 191 Bà Triệu, Hai Bà Trưng, Hà Nội",
              "Tầng L3, TTTM Vincom Center Metropolis, 29 Liễu Giai, Ba Đình, Hà Nội"
            ]
          },
          "nam": {
            "address": ["Lô B1-38, TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, Phường 22, Quận Bình Thạnh, Tp. HCM"]
          }
        },
        "ten": "Capricciosa"
        }
    },
    {
        "place":{
            "hinh": "KingBBQ.png",
        "hoanTien": "10%",
        "id": 8,
        "mien": {
          "bac": {
            "address": [
              "Tầng 5, Vincom Center, 191 Bà Triệu, Hai Bà Trưng, Hà Nội",
              "Tầng 1 Tòa nhà Mipec 229 Tây Sơn, Đống Đa, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "515 Nguyễn Tri Phương, Phường 8, Quận 10, TP.HCM",
              "Gian hàng 04-05B, Tầng 4, TTTM SC Vivocity, Khu Đô Thị Mới Nam Sài Gòn, 1058 ĐL Nguyễn văn Linh, P.Tân Phong, Q.7, TP.HCM",
              "310 Tân Sơn Nhì, Phường Tân Sơn Nhì, Quận Tân Phú, TP.HCM"
            ]
          }
        },
        "ten": "King BBQ"
        }
    },
    {
        "place":{
            "hinh": "Bukbuk.png",
        "hoanTien": "10%",
        "id": 9,
        "mien": {
          "bac": {
            "address": [
              "Savico Megamall 7-9 Nguyễn Văn Linh, Quận Long Biên, Hà Nội",
              "Tầng 3 Vincom Bắc Ninh, Ngã 6 đường Lý Thái Tổ, Đại Phúc, Bắc Ninh"
            ]
          },
          "nam": {
            "address": [
              "347 Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP.HCM",
              "Tầng 3, TTTM Vincom Tây Ninh, Khu phố 1, Phường 3, Tỉnh Tây Ninh"
            ]
          }
        },
        "ten": "BukBuk"
        }
    },
    {
        "place":{
            "hinh": "Tasaki.png",
        "hoanTien": "10%",
        "id": 10,
        "mien": {
          "bac": {
            "address": [
              "46 Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
              "Tầng 3, Lotte Department Store, 54 Liễu Giai, P.Cống Vị, Q.Ba Đình, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "Tầng trệt, 409A Lê Văn Sỹ, Phường 12, Quận 3, TP.HCM",
              "Gian hàng B1-07+08, Tầng B1 , TTTM Vincom Quang Trung - 190 Quang Trung, Phường 10, Q. Gò Vấp, TP.HCM",
              "Tầng 6, TTTM Vạn Hạnh, Số 11 Sư Vạn Hạnh, P12, Q10, TP.HCM"
            ]
          }
        },
        "ten": "Tasaki BBQ"
        }
    },
    {
        "place":{
            "hinh": "Jockey.png",
        "hoanTien": "10%",
        "id": 11,
        "mien": {
          "bac": {
            "address": [
              "217 Chùa Bộc, Phường Trung Liệt, Quận Đống Đa, Hà Nội",
              "Tầng 1, Tòa nhà D2 Giảng Võ, Đường D2, Phường Giảng Võ, Quận Ba Đình, Hà Nội",
              "93 Phố Huế, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "292 Lê Văn Sỹ, Phường 14, Quận 3, Tp. HCM",
              "02 Trần Quang Khải, Phường Tân Định, Quận 1, Tp. HCM"
            ]
          }
        },
        "ten": "Jockey"
        }
    },
    {
        "place":{
             "hinh": "Dolpan.jpg",
        "hoanTien": "10%",
        "id": 12,
        "mien": {
          "bac": {
            "address": [
              "Tầng 4 TTTM Artemis, số 3 Lê Trọng Tấn, Hà Nội",
              "Lô T5- 09, tầng 5 TTTM Vincom Center Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội"
            ]
          },
          "nam": {
            "address": [
              "Tầng 6, TTTM Vạn Hạnh, Số 11 Sư Vạn Hạnh, P12, Q10, TP.HCM",
              "Tầng 5, TTTM Gigamall, 242 Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, TP.HCM"
            ]
          }
        },
        "ten": "Dolpan Sam"
        }
    }
],
  $scope.greeting = 'Hola!';
  $scope.cardClick = function(data){
    $scope.northeast = data.place.mien.bac?.address !== undefined ? data.place.mien.bac?.address : {};
    $scope.southeast = data.place.mien.nam?.address !== undefined ? data.place.mien.nam?.address : {};
    $scope.mientrung = data.place.mien.trung?.address !== undefined ? data.place.mien.trung?.address : {}; 
    $scope.name = data.place.ten;
    $scope.isDisabled = !$scope.isDisabled;

    console.log(data);
  }
  $scope.changeIsDisabled = function(){
    $scope.isDisabled = !$scope.isDisabled;
  }
  $scope.clickIcon = function(){
        $scope.style='d-block';
  }
  $scope.clickIcon1 = function(){
    $scope.style='';
  }
}]);