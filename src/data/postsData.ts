interface Post {
  id: number
  name: string
  img: string
  text: string
}

export const posts: Post[] = [
  {
    id: 1,
    name: 'Qvevri',
    img: '../WineStore/assets/post1.png',

    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae suscipit diam. Pellentesque purus velit, molestie ac est vitae, egestas euismod tortor. Nam tempor odio convallis elit ullamcorper, eu fermentum quam pulvinar. Etiam mattis ac sapien eu sodales. Suspendisse convallis ipsum vel elit imperdiet ultrices. Sed scelerisque finibus magna, ut malesuada magna tristique eget. Fusce in erat sit amet augue convallis consequat at at dui. Donec dapibus erat augue, varius convallis urna rutrum sit amet. Aliquam tempor augue vitae mi congue, sagittis ornare metus hendrerit. Maecenas nec eros sit amet felis lobortis mattis. Integer lacus sem, mollis eu sollicitudin id, luctus at odio. Donec scelerisque magna et odio venenatis convallis. Proin semper lacus ultricies congue imperdiet.
		Maecenas sit amet sem tincidunt, pretium tellus at, ultrices dolor. Sed ut porta enim. Ut tempus suscipit blandit. Curabitur at lacus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum arcu est, vehicula at cursus at, dignissim a risus. Duis luctus vestibulum ipsum, et imperdiet nibh tincidunt eget. Donec vel lorem nec quam accumsan aliquam. Suspendisse iaculis facilisis facilisis. Curabitur a pulvinar dolor, non convallis nibh. Pellentesque consequat rutrum velit, sit amet sodales diam. Suspendisse vitae orci nec velit suscipit bibendum sit amet eu erat. Praesent auctor nibh libero, quis malesuada turpis varius a. Quisque porttitor nibh sed odio efficitur, et convallis mauris scelerisque. Proin ornare tortor arcu, a varius nibh vestibulum at. Duis sodales venenatis laoreet. Donec a mi vel est consequat scelerisque vitae et purus. Sed luctus arcu dictum mi iaculis consequat. Vivamus tellus purus, dapibus sed sapien in, lacinia interdum arcu. Ut non pharetra nisi.
	  Duis vulputate nulla nec euismod vulputate. Praesent lorem nisl, ultricies ac nunc quis, porta ornare velit. Duis vehicula sagittis vehicula. Etiam lobortis ex nec egestas lacinia. Nulla sit amet tellus quis ex dapibus euismod in vitae risus. Duis quis blandit eros. Maecenas at turpis eu lectus lacinia pharetra vel eu tellus. Nunc dapibus pharetra risus, vitae dignissim ante luctus ut. Mauris vel odio id risus pulvinar pellentesque ac vel eros. In lacinia tristique ullamcorper.
		Vestibulum pulvinar ligula magna, in accumsan libero hendrerit eget. Maecenas pretium ante at suscipit mattis. Sed quam nibh, egestas a leo quis, facilisis luctus quam. Aenean mollis nisl in nisi consequat, ut hendrerit dolor aliquam. Donec sapien ex, fermentum quis orci nec, aliquet cursus ante. Mauris accumsan consequat risus, eget bibendum tortor volutpat id. Etiam tristique erat augue, vitae varius ligula consectetur vitae. Morbi sed mattis arcu. Proin elementum efficitur risus eget commodo.
		Etiam imperdiet nulla sed feugiat laoreet. Proin et rhoncus diam. Vivamus faucibus arcu massa, eu ultricies erat suscipit vitae. Etiam eleifend viverra leo fermentum dapibus. Phasellus ut ornare nunc. Nunc tempor ornare scelerisque. Maecenas sem mauris, tempus vel nulla ac, eleifend rutrum ligula. Nullam ut vulputate eros. Etiam eget nisl quis leo blandit facilisis. Nunc sit amet libero ultricies, facilisis libero nec, commodo odio. Nam cursus, justo quis malesuada accumsan, leo odio semper magna, sed dignissim eros lorem non diam.
		Ut vehicula elit ut diam condimentum placerat. Ut ut posuere leo. Pellentesque gravida odio id orci posuere, malesuada vulputate odio lobortis. Quisque mauris augue, porta non turpis eu, auctor varius arcu. Sed accumsan leo justo, eu ultricies nisi tincidunt sed. Nam sed sagittis elit, ut placerat lacus. Pellentesque finibus non libero vel pretium. Nullam consequat at turpis vel hendrerit.`
  },
  {
    id: 2,
    name: 'European technologies',
    img: '../WineStore/assets/post2.png',
    text: `Praesent auctor nibh libero, quis malesuada turpis varius a. Quisque porttitor nibh sed odio efficitur, et convallis mauris scelerisque. Proin ornare tortor arcu, a varius nibh vestibulum at. Duis sodales venenatis laoreet. Donec a mi vel est consequat scelerisque vitae et purus. Sed luctus arcu dictum mi iaculis consequat. Vivamus tellus purus, dapibus sed sapien in, lacinia interdum arcu. Ut non pharetra nisi.

		Duis vulputate nulla nec euismod vulputate. Praesent lorem nisl, ultricies ac nunc quis, porta ornare velit. Duis vehicula sagittis vehicula. Etiam lobortis ex nec egestas lacinia. Nulla sit amet tellus quis ex dapibus euismod in vitae risus. Duis quis blandit eros. Maecenas at turpis eu lectus lacinia pharetra vel eu tellus. Nunc dapibus pharetra risus, vitae dignissim ante luctus ut. Mauris vel odio id risus pulvinar pellentesque ac vel eros. In lacinia tristique ullamcorper.`
  },
  {
    id: 3,
    name: 'Grape varieties',
    img: '../WineStore/assets/post3.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae suscipit diam. Pellentesque purus velit, molestie ac est vitae, egestas euismod tortor. Nam tempor odio convallis elit ullamcorper, eu fermentum quam pulvinar. Etiam mattis ac sapien eu sodales. Suspendisse convallis ipsum vel elit imperdiet ultrices. Sed scelerisque finibus magna, ut malesuada magna tristique eget. Fusce in erat sit amet augue convallis consequat at at dui. Donec dapibus erat augue, varius convallis urna rutrum sit amet. Aliquam tempor augue vitae mi congue, sagittis ornare metus hendrerit. Maecenas nec eros sit amet felis lobortis mattis. Integer lacus sem, mollis eu sollicitudin id, luctus at odio. Donec scelerisque magna et odio venenatis convallis. Proin semper lacus ultricies congue imperdiet.

		Maecenas sit amet sem tincidunt, pretium tellus at, ultrices dolor. Sed ut porta enim. Ut tempus suscipit blandit. Curabitur at lacus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum arcu est, vehicula at cursus at, dignissim a risus. Duis luctus vestibulum ipsum, et imperdiet nibh tincidunt eget. Donec vel lorem nec quam accumsan aliquam. Suspendisse iaculis facilisis facilisis. Curabitur a pulvinar dolor, non convallis nibh. Pellentesque consequat rutrum velit, sit amet sodales diam. Suspendisse vitae orci nec velit suscipit bibendum sit amet eu erat.
		
		Praesent auctor nibh libero, quis malesuada turpis varius a. Quisque porttitor nibh sed odio efficitur, et convallis mauris scelerisque. Proin ornare tortor arcu, a varius nibh vestibulum at. Duis sodales venenatis laoreet. Donec a mi vel est consequat scelerisque vitae et purus. Sed luctus arcu dictum mi iaculis consequat. Vivamus tellus purus, dapibus sed sapien in, lacinia interdum arcu. Ut non pharetra nisi.
		
		Duis vulputate nulla nec euismod vulputate. Praesent lorem nisl, ultricies ac nunc quis, porta ornare velit. Duis vehicula sagittis vehicula. Etiam lobortis ex nec egestas lacinia. Nulla sit amet tellus quis ex dapibus euismod in vitae risus. Duis quis blandit eros. Maecenas at turpis eu lectus lacinia pharetra vel eu tellus. Nunc dapibus pharetra risus, vitae dignissim ante luctus ut. Mauris vel odio id risus pulvinar pellentesque ac vel eros. In lacinia tristique ullamcorper.`
  },
  {
    id: 4,
    name: 'Bottles',
    img: '../WineStore/assets/post4.png',
    text: 'Maecenas sit amet sem tincidunt, pretium tellus at, ultrices dolor. Sed ut porta enim. Ut tempus suscipit blandit. Curabitur at lacus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum arcu est, vehicula at cursus at, dignissim a risus. Duis luctus vestibulum ipsum, et imperdiet nibh tincidunt eget. Donec vel lorem nec quam accumsan aliquam. Suspendisse iaculis facilisis facilisis. Curabitur a pulvinar dolor, non convallis nibh. Pellentesque consequat rutrum velit, sit amet sodales diam. Suspendisse vitae orci nec velit suscipit bibendum sit amet eu erat.'
  },
  {
    id: 5,
    name: 'People & Wine',
    img: '../WineStore/assets/post5.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae suscipit diam. Pellentesque purus velit, molestie ac est vitae, egestas euismod tortor. Nam tempor odio convallis elit ullamcorper, eu fermentum quam pulvinar. Etiam mattis ac sapien eu sodales. Suspendisse convallis ipsum vel elit imperdiet ultrices. Sed scelerisque finibus magna, ut malesuada magna tristique eget. Fusce in erat sit amet augue convallis consequat at at dui. Donec dapibus erat augue, varius convallis urna rutrum sit amet. Aliquam tempor augue vitae mi congue, sagittis ornare metus hendrerit. Maecenas nec eros sit amet felis lobortis mattis. Integer lacus sem, mollis eu sollicitudin id, luctus at odio. Donec scelerisque magna et odio venenatis convallis. Proin semper lacus ultricies congue imperdiet.

		Maecenas sit amet sem tincidunt, pretium tellus at, ultrices dolor. Sed ut porta enim. Ut tempus suscipit blandit. Curabitur at lacus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum arcu est, vehicula at cursus at, dignissim a risus. Duis luctus vestibulum ipsum, et imperdiet nibh tincidunt eget. Donec vel lorem nec quam accumsan aliquam. Suspendisse iaculis facilisis facilisis. Curabitur a pulvinar dolor, non convallis nibh. Pellentesque consequat rutrum velit, sit amet sodales diam. Suspendisse vitae orci nec velit suscipit bibendum sit amet eu erat.
		
		Praesent auctor nibh libero, quis malesuada turpis varius a. Quisque porttitor nibh sed odio efficitur, et convallis mauris scelerisque. Proin ornare tortor arcu, a varius nibh vestibulum at. Duis sodales venenatis laoreet. Donec a mi vel est consequat scelerisque vitae et purus. Sed luctus arcu dictum mi iaculis consequat. Vivamus tellus purus, dapibus sed sapien in, lacinia interdum arcu. Ut non pharetra nisi.
		
		Duis vulputate nulla nec euismod vulputate. Praesent lorem nisl, ultricies ac nunc quis, porta ornare velit. Duis vehicula sagittis vehicula. Etiam lobortis ex nec egestas lacinia. Nulla sit amet tellus quis ex dapibus euismod in vitae risus. Duis quis blandit eros. Maecenas at turpis eu lectus lacinia pharetra vel eu tellus. Nunc dapibus pharetra risus, vitae dignissim ante luctus ut. Mauris vel odio id risus pulvinar pellentesque ac vel eros. In lacinia tristique ullamcorper.
		
		Vestibulum pulvinar ligula magna, in accumsan libero hendrerit eget. Maecenas pretium ante at suscipit mattis. Sed quam nibh, egestas a leo quis, facilisis luctus quam. Aenean mollis nisl in nisi consequat, ut hendrerit dolor aliquam. Donec sapien ex, fermentum quis orci nec, aliquet cursus ante. Mauris accumsan consequat risus, eget bibendum tortor volutpat id. Etiam tristique erat augue, vitae varius ligula consectetur vitae. Morbi sed mattis arcu. Proin elementum efficitur risus eget commodo.
		
		Etiam imperdiet nulla sed feugiat laoreet. Proin et rhoncus diam. Vivamus faucibus arcu massa, eu ultricies erat suscipit vitae. Etiam eleifend viverra leo fermentum dapibus. Phasellus ut ornare nunc. Nunc tempor ornare scelerisque. Maecenas sem mauris, tempus vel nulla ac, eleifend rutrum ligula. Nullam ut vulputate eros. Etiam eget nisl quis leo blandit facilisis. Nunc sit amet libero ultricies, facilisis libero nec, commodo odio. Nam cursus, justo quis malesuada accumsan, leo odio semper magna, sed dignissim eros lorem non diam.
		
		Ut vehicula elit ut diam condimentum placerat. Ut ut posuere leo. Pellentesque gravida odio id orci posuere, malesuada vulputate odio lobortis. Quisque mauris augue, porta non turpis eu, auctor varius arcu. Sed accumsan leo justo, eu ultricies nisi tincidunt sed. Nam sed sagittis elit, ut placerat lacus. Pellentesque finibus non libero vel pretium. Nullam consequat at turpis vel hendrerit.
		
		Mauris commodo elit sed diam placerat tristique. Morbi quis sodales neque, vitae scelerisque est. Nam a libero ac orci rhoncus condimentum. Morbi massa ipsum, luctus eu tristique sit amet, fermentum nec orci. Cras maximus odio id tempor vestibulum. Vestibulum convallis venenatis tortor, et molestie dolor luctus sit amet. Cras et orci ex. Nulla lacinia condimentum mauris sit amet pharetra. Proin scelerisque tellus sit amet est malesuada mattis. Nulla facilisi. Praesent viverra tempus ornare.
		
		Cras iaculis, est at pellentesque feugiat, ex est cursus ligula, ut semper eros eros quis velit. Vivamus quis ultrices leo. Integer venenatis neque at congue molestie. Sed congue augue ut sapien cursus, ac imperdiet augue finibus. Vestibulum suscipit mollis euismod. Aliquam eget finibus ante. Vestibulum laoreet, lacus eu fermentum scelerisque, turpis erat scelerisque lacus, id rhoncus sapien justo ac ante. In gravida luctus ante, eu posuere sapien facilisis vitae. Fusce posuere dapibus turpis, ac vestibulum nunc tempus vel. Quisque id dictum justo. Aliquam erat volutpat. Fusce augue purus, tempus id scelerisque eget, mollis id dolor. Ut varius commodo fringilla. Proin vehicula mattis tincidunt. Quisque tincidunt ex ut ante congue tincidunt. Pellentesque ultrices eget nunc in vestibulum.
		
		Quisque in orci quis libero pretium aliquet quis quis libero. Duis placerat fermentum quam ut facilisis. Aliquam erat volutpat. Suspendisse vitae sapien ligula. Integer convallis odio ex, eu mollis massa lobortis sit amet. Sed quis arcu quis elit lobortis placerat. Vestibulum massa nisl, consequat ac interdum sed, dapibus eget nulla. Aenean ut quam odio. Nunc sed pretium risus. Sed facilisis in lacus id laoreet. Phasellus libero neque, scelerisque ut urna eget, hendrerit placerat mi. Ut vitae nunc ac nulla tempus elementum sit amet ut sem. Morbi congue tellus quis mi posuere, eu dignissim quam hendrerit. Duis in ullamcorper augue. In vel risus eu purus vulputate aliquet non blandit enim. Nam consequat velit quis massa iaculis, vitae tempus mauris viverra.`
  }
]
