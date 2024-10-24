import React from 'react';

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;

    if (xScale) {
        return (
            <g transform={`translate(0, ${height})`}>
                {/* X-axis label */}
                <text
                    style={{ textAnchor: 'middle', fontSize: '15px' }}
                    x={width / 2}
                    y={30}  // Adjusted position for axis label text
                >
                    {axisLabel}
                </text>

                {/* X-axis line */}
                <line x1="0" x2={width} y1="0" y2="0" stroke="black" />

                {/* X-axis ticks */}
                {xScale.ticks ? (
                    // For linear scales like scaleLinear or scaleTime
                    xScale.ticks().map((tick, i) => (
                        <g key={i} transform={`translate(${xScale(tick)}, 0)`}>
                            <line y2="6" stroke="black" />
                            <text
                                style={{ textAnchor: 'start', fontSize: '12px' }}
                                x="0"
                                dy="0.71em"
                                y="10"  // Adjusted position to appear below the ticks
                            >
                                {tick}
                            </text>
                        </g>
                    ))
                ) : (
                    // For categorical scales like scaleBand
                    xScale.domain().map((station, i) => (
                        <g key={i} transform={`translate(${xScale(station)}, 0)`}>
                            <line y2="6" stroke="black" />
                            <text
                                style={{ textAnchor: 'start', fontSize: '10px' }}
                                x={xScale.bandwidth() / 2}  // Centers the text for band scales
                                dy="0.71em"
                                y="-10"  // Adjusted position for better visibility
                                transform="rotate(80)"  // Rotate the text for readability
                            >
                                {station}
                            </text>
                        </g>
                    ))
                )}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default XAxis;
