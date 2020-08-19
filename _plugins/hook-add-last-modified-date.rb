Jekyll::Hooks.register :docs, :pre_render do |post|

  # debug
  puts "Firing :docs, :pre_render from : " + File.basename(__FILE__) + " for : " + post.relative_path

  # get the current post last modified time
  modification_time = File.mtime( post.path )

  # debug
  puts "modification_time = " + modification_time.strftime('%A, %B %dth %Y at %l:%M%p')

  # inject modification_time in post's datas.
  post.data['last-modified-date'] = modification_time

end
