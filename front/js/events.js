mixin card(classname, href, title, description)
	.card-container 
		.card(class=classname)
			a(href=href)
				.card--display
					h2=title
				.card--hover
					h2=title
					p=description
					p.link Dodaj me
			.card--border
			
+card(
'',
'event1', 
'Event 1', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.')
+card(
'', 
'event2', 
'Event2', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.')
+card(
'', 
'event3', 
'Event 3', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.')
+card(
'',
'event4', 
'Event 4', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.')
+card(
'',
'event5', 
'Event5', 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.')