import React, { useState, useEffect, useRef } from 'react'
import { Wrapper, Preview } from './styles'
import { Button } from '../../styles/global'

import youtube from '../../api/youtube'

import YoutubeWrapper from './YoutubeWrapper/YoutubeWrapper'

const PodcastVideos = () => {
    const [isLoading, setIsLoading] = useState(true);

    // // State for the list
    const [list, setList] = useState([])

    // // State to trigger load more
    const [loadMore, setLoadMore] = useState(false)

    // // State of whether there is more to load
    const [hasMore, setHasMore] = useState(null)

    // // // Array of all videos
    const allVideos = useRef(null)

    useEffect(() => {
        const fetch = async () => {
            const response = await youtube.get('/search')
            allVideos.current = response;
            setList([...allVideos.current.data.items.slice(0, 6)])
            setHasMore(allVideos.current.data.items.length > 6)
            setIsLoading(false);
        };
        fetch();
    }, []);
 
    //  // Load more button click
     const handleLoadMore = () => {
         setLoadMore(true)
     }
 
    //  // Handle loading more articles
    useEffect(() => {
        if (!isLoading) {
            if (loadMore && hasMore) {
                const currentLength = list.length
                const isMore = currentLength < allVideos.current.data.items.length
                const nextResults = isMore
                    ? allVideos.current.data.items.slice(currentLength, currentLength + 6)
                    : []
                setList([...list, ...nextResults])
                setLoadMore(false)
            }
        }
     }, [loadMore, hasMore]) //eslint-disable-line
 
    //  //Check if there is more
    useEffect(() => {
        if (!isLoading) {
            const isMore = list.length < allVideos.current.data.items.length
            setHasMore(isMore)
        }
    }, [list]) //eslint-disable-line

    return (
        <>
            <Wrapper>
                <h2>Najnovije epizode...</h2>
                <Preview>
                    {(!isLoading) && list.map((video, index) => (
                        <YoutubeWrapper key={index} video={video}/>
                    ))}
                </Preview>
                <Button onClick={handleLoadMore}>Vidi više</Button>
            </Wrapper>
        </>
    )
}

export default PodcastVideos