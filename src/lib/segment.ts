export const testSegment = (event:any) => {
    window.analytics.track("test_segment", {
        id: event.id
    })
}