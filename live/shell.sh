#!/bin/bash
VIDSOURCE="rtsp://118.232.137.90:554/user=guest&password=&channel=01&stream=0.sdp"
AUDIO_OPTS="-c:a aac -b:a 160000 -ac 2"
VIDEO_OPTS="-s 854x480 -c:v libx264 -b:v 800000"
OUTPUT_HLS="-hls_time 10 -hls_list_size 10 -start_number 1"
ffmpeg -i "$VIDSOURCE" -y $AUDIO_OPTS $VIDEO_OPTS $OUTPUT_HLS mystream.m3u8