import sys, getopt,wget
import time,re,os,requests,urllib2
import sys
from bs4 import BeautifulSoup

#ss搭理配置，其他代理自己改
proxies = {
  \"http\": \"socks5://127.0.0.1:1080\",
  \"https\": \"socks5://127.0.0.1:1080\",
}

reload(sys)
sys.setdefaultencoding( \"utf-8\" )
#----------- 爬取tumblr图片和视频 -----------
class TumblrClass:
    def __init__(self):
        self.clear_video=0
        self.clear_img=0
        self.img_path=''
        self.video_path=''
        self.index_url=''
        self.curPage=1
        self.video_url_file=''
        self.img_url_file=''
        self.headers = {
        'Host':self.index_url.replace('http://',''),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate',
        'Referer': self.index_url,
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0'
        }
        self.se = requests.Session()
    def set_headers(self,reUrl):
        self.headers = {
        'Host':self.index_url.replace('http://','').strip('/'),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'X-Requested-With':'XMLhttpRequest',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate',
        'Referer': reUrl,
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0'
        }    
    
    def get_blogs_in_file(self,fileName):
        blogList=[]
        inFile=open(fileName,'r')
        for line in inFile:
            blogList.append(line.replace('\n',''))
        return blogList
    def get_img_urls(self,text):
        img_urls=[]
        return img_urls
    def get_video_urls(self,text):
        r = BeautifulSoup(text,\"html.parser\")
        iframes = r.find_all('iframe',src=re.compile(\"https://www.tumblr.com/video/\"))
        video_urls=[]
        for iframe in iframes:
            newSrc = iframe['src']
            video_urls.append(newSrc)
            
        return video_urls
    def get_video_files(self,url):
        url=url.strip('/')
        print '进入嵌套的视频页面 : '+url
        #-----------------------------------------------------------
        self.set_headers(url)
        self.headers={
        'Host': 'www.tumblr.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
        }
        Reslut=self.se.get(url,headers=self.headers,proxies=proxies)

        soup = BeautifulSoup(Reslut.text,\"html.parser\")
        links = soup.find_all('source')
        for link in links:
            originUrl = link.get('src')
            originType = link.get('type')
            
            #获取真正的URL
            r = self.se.get(originUrl,headers=self.headers,proxies=proxies,allow_redirects = False)
            trueUrl = r.headers['Location']
            if '#_=_' in trueUrl:
                trueUrl = trueUrl.replace('#_=_','')

        return trueUrl
    def save_video_file(self,url,path):
        url=self.get_video_files(url)
        print '开始保存视频地址到文件 : '+url
        self.video_url_file.write(url+'\n')
        self.video_url_file.flush()
        
    def deal_blogs_page(self,url):
        print '正在获取当前页面的所有视频内容 : '+url
        self.set_headers(url)
        Result=self.se.get(url,headers=self.headers,proxies=proxies)
        text=Result.text
        video_urls=self.get_video_urls(text)
        
        for videoUrl in video_urls:
            self.save_video_file(videoUrl,self.video_path)
        nextUrls=re.findall('href=\\"/page/(?P<next>\d+)\\"',text)
        if(nextUrls!=[]):
            nextPage=str(self.curPage+1)
            if(nextPage in nextUrls):
                nextUrl=self.index_url+'page/'+nextPage
                self.curPage+=1
                self.deal_blogs_page(nextUrl)
                #抓取一页的时候，停60秒
                #time.sleep(60)
        else:
            return
    def deal_save_path(self):
        userNames=re.findall('http://(?P<PATH>[^\.]*?)\.tumblr\.com/',self.index_url)
        if(userNames!=[]):
            userName=userNames[0]
        self.img_path=userName+'/img/'
        self.video_path=userName+'/videos/'
        if(os.path.exists(self.video_path)==False):
            os.makedirs(self.video_path)
        self.video_url_file=open(self.video_path+'video_url','w')
    
    def display_progress(width, percent):
        percent=int(percent)  
        print \"%s %d%%\r\" % (('%%-%ds' % width) % (width * percent / 100 * '='), percent),  
        if percent >= 100:  
            print  
            sys.stdout.flush()  
    
    def update_display(self,received,file_size):
        percent = received*100.0/file_size
        if percent > 100:
            percent = 100.0
        self.display_progress(100,percent)
    
    def main(self,type,value,isSave):
        self.isSave=isSave
        if(type=='b'):
            if(re.match('^[http://]',value)==False):
                self.index_url='http://'+value.strip('/')+'/'
            else:
                self.index_url=value.strip('/')+'/'
            self.set_headers(self.index_url)
            self.deal_save_path()
            self.deal_blogs_page(self.index_url)
        elif(type=='f'):
            urlList=self.get_blogs_in_file(value)
            for url in urlList:
                if(re.match('^[http://]',url)==False):
                    self.index_url='http://'+url.strip('/')+'/'
                else:
                    self.index_url=url.strip('/')+'/'
                self.deal_save_path()
                self.deal_blogs_page(self.index_url)
    def __del__(self):
        self.video_url_file.close()

if __name__ == '__main__':
    tc=TumblrClass()
    type=''
    values=''
    isSave=0
    if(len(sys.argv)!=3):
        print 'Input number Error!'
        print 'python '+sys.argv[0]+' -u[url] or -f[fileName] [0/1]'
        exit()
    opts, args = getopt.getopt(sys.argv[1:], \"hu:f:h:s:\")
    for op, value in opts:
        if(op=='-u'):
            type='b'
            values=value
        elif(op=='-f'):
            type = 'f'
            values=value
        else:
            print 'python '+sys.argv[0]+' -u[url] or -f[fileName]  [0/1]'
            exit()
    isSave=sys.argv[2]
    #print isSave
    tc.main(type,values,isSave)