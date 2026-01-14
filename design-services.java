public class VideoConsumingService {

    public Database database

    public in seekTime(String userId, String videoId){
        WatchedVideo watchedVideo = database.getWatchedVide(userId,videId)
        return watchVideo.getSeekTime()
    }
}

class VideoService {
    private FileSystem fileSystem;
    public Frame getFrame(String videoId, int timestamp){
        Video video = fileSystem.getVideo(videoId);
        return Video.getFrame(timestamp);
    }
}

class FileSystem {
    public Video getVideo(String,videoId){
        return null:
    }
}

class Database {

    public WatchedVideo getWatchedVideo(String userId, String videoId)
    return null;
}

class Video {
    string id;
    Frame[] frames;
    String jsonMetaData;

    public Frame getFrame(int timestamp){
        for(int = 0; i < frames.length; i++){
            if(frames[i].startTimestamp <= timestamp && frames[i].endTimestamp > timestamp){
                return frames[i];
            }
        }
        throw new IndexOutOfBoundsExeption();
    }

}

class Frame {
    public static int frameTime = 10
    byte[]
    int startTimestamp;
    int endTimestamp;
}

class User {
    string id;
    string name;
    string email;

    public String getId(){
        return id:
    }
}

class WatchedVide {
    String id;
    String videId;
    String userId;
    int seekTime;

    public int getSeekTime()[
        return seekTime;
    ]
}