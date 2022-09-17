/**
 *
 * AboutMeView
 *
 */
import React, { memo } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { InlineIcon } from '@iconify/react';
import { aboutMeContent } from 'conf/aboutme';
import { AboutMeType } from 'types';

interface Props {}

export const AboutMeView = memo((props: Props) => {
  return (
    <div className={'mt-5'}>
      <VerticalTimeline>
        {aboutMeContent.map((roadmap: AboutMeType) => {
          return roadmap.current ? (
            <VerticalTimelineElement
              key={roadmap.title}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              className="vertical-timeline-element--work"
              date={roadmap.date}
              iconStyle={{ background: roadmap.color, color: '#fff' }}
              icon={<InlineIcon icon={'mdi:av-timer'} />}
            >
              <h3 className="vertical-timeline-element-title">
                {roadmap.title}
              </h3>
              <h4 className="vertical-timeline-element-title">
                {roadmap.subTitle}
              </h4>
              <p>{roadmap.content}</p>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              key={roadmap.title}
              className="vertical-timeline-element--work"
              date={roadmap.date}
              iconStyle={{ background: roadmap.color, color: '#fff' }}
              icon={<InlineIcon icon={'mdi:av-timer'} />}
            >
              <h3 className="vertical-timeline-element-title">
                {roadmap.title}
              </h3>
              <h4 className="vertical-timeline-element-title">
                {roadmap.subTitle}
              </h4>
              <p>{roadmap.content}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          key={'bottom'}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<InlineIcon icon={'mdi:av-timer'} />}
        />
      </VerticalTimeline>
    </div>
  );
});
